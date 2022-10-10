/** @jsx h */
import { VNode, h } from 'preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';
import { adjustScale } from './drawer/scale';
import { drawCell, getGridSize } from './drawer/grid';
import { draw, drawFromMatrix } from './drawer/draw';
import './style.css';
import { randomMatrixFromDims } from './matrix';
import { getCtx } from './ctx/getter';

export default function App(): VNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawRandomGrid = useCallback(() => {
    requestAnimationFrame(() => {
      const [rows, cols] = getGridSize(document);
      const matrix = randomMatrixFromDims(rows, cols);
      draw(document);
      drawFromMatrix(document, matrix);
    });
  }, []);

  const resizeCanvas = useCallback(() => {
    /* istanbul ignore next */
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      draw(document);
    }
  }, []);

  const handleClick = useCallback((event: MouseEvent) => {
    drawCell(document, event.offsetX, event.offsetY);
  }, []);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.code !== 'Space') {
        return;
      }
      event.preventDefault();
      drawRandomGrid();
    },
    [drawRandomGrid]
  );

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleKeyPress, resizeCanvas]);

  useEffect(() => {
    adjustScale(getCtx(document));
    drawRandomGrid();
  }, [drawRandomGrid]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      data-testid="canvas"
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={handleClick}
    />
  );
}
