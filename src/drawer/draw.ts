import { drawCellByIndices } from "src/drawer/grid/cell";
import { getCtx } from "../ctx/getter";
import { IMatrix } from "../matrix";
import { adjustScale } from "./scale";
import { drawGrid } from "./grid";

const drawers: ((ctx: CanvasRenderingContext2D) => void)[] = [drawGrid];

export function draw(document: Document): void {
  const ctx = getCtx(document);
  adjustScale(ctx);
  drawers.forEach((drawer) => drawer(ctx));
}

export function drawFromMatrix(document: Document, matrix: IMatrix): void {
  const ctx = getCtx(document);
  adjustScale(ctx);
  for (const [row, col] of matrix.indices()) {
    if (matrix.isCellFilled(row, col)) {
      drawCellByIndices(document, row, col);
    }
  }
}
