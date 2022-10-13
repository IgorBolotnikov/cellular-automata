/** @jsx h */
import { VNode, h } from 'preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';
import { adjustScale } from './drawer/scale';
import { drawCell, getGridSize } from './drawer/grid';
import { drawFromMatrix, drawGrid } from './drawer/draw';
import './style.css';
import { randomMatrixFromDims } from './matrix';
import { getCtx } from './ctx/getter';
import { config } from './config';

export default function App(): VNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<HTMLCanvasElement>(null);
  const paused = useRef(false);

  const drawRandomGrid = useCallback(() => {
    requestAnimationFrame(() => {
      const [rows, cols] = getGridSize(document);
      const matrix = randomMatrixFromDims(rows, cols);
      drawFromMatrix(document, matrix);
    });
  }, []);

  const resizeCanvas = useCallback(() => {
    /* istanbul ignore next */
    if (gridRef.current) {
      gridRef.current.width = window.innerWidth;
      gridRef.current.height = window.innerHeight;
      adjustScale(getCtx(document, 'grid'));
      drawGrid(document);
    }
    /* istanbul ignore next */
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      adjustScale(getCtx(document, 'canvas'));
    }
  }, []);

  const animate = useCallback(() => {
    if (paused.current) {
      return;
    }
    drawRandomGrid();
    setTimeout(() => {
      animate();
    }, 1000 / config.fps);
  }, [drawRandomGrid]);

  const handleClick = useCallback((event: MouseEvent) => {
    drawCell(getCtx(document), event.offsetX, event.offsetY);
  }, []);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.code !== 'Space') {
        return;
      }
      event.preventDefault();
      paused.current = !paused.current;
      if (!paused.current) {
        animate();
      }
    },
    [animate]
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
    adjustScale(getCtx(document, 'canvas'));
    adjustScale(getCtx(document, 'grid'));
    drawGrid(document);
    animate();
  }, [animate, drawRandomGrid]);

  return (
    <div id="root">
      <canvas
        ref={gridRef}
        id="grid"
        data-testid="grid"
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <canvas
        ref={canvasRef}
        id="canvas"
        data-testid="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleClick}
      />
    </div>
  );
}
