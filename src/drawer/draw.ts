import { getCtx } from "../ctx/getter";
import { adjustScale } from "./scale";
import { drawGrid } from "./grid";

const drawers: ((ctx: CanvasRenderingContext2D) => void)[] = [drawGrid];

export function draw(document: Document): void {
  const ctx = getCtx(document);
  adjustScale(ctx);
  drawers.forEach((drawer) => drawer(ctx));
}
