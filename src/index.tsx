/** @jsx h */
import { VNode, h } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { drawCell, getGridSize } from "./drawer/grid";
import { draw, drawFromMatrix } from "./drawer/draw";
import "./style.css";
import { randomMatrixFromDims } from "./matrix";

export default function App(): VNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  useEffect(() => {
    const [rows, cols] = getGridSize(document);
    const matrix = randomMatrixFromDims(rows, cols);
    draw(document);
    drawFromMatrix(document, matrix);
  }, []);

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
