/** @jsx h */
import { VNode, h } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { drawCell } from "./drawer/grid";
import { draw } from "./drawer/draw";
import "./style.css";

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

  useEffect(() => draw(document), []);

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
