/** @jsx h */
import { VNode, h } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import "./style.css";

export default function App(): VNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resizeCanvas = useCallback(() => {
    /* istanbul ignore next */
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      data-testid="canvas"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
