import { drawCellByIndices } from './grid/cell';
import { getCtx } from '../ctx/getter';
import { IMatrix } from '../matrix';
import { drawGrid as _drawGrid } from './grid';

export function drawFromMatrix(document: Document, matrix: IMatrix): void {
  const ctx = getCtx(document);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (const [row, col] of matrix.indices()) {
    if (matrix.isCellFilled(row, col)) {
      drawCellByIndices(ctx, row, col);
    }
  }
}

export function drawGrid(document: Document): void {
  const ctx = getCtx(document, 'grid');
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  _drawGrid(ctx);
}
