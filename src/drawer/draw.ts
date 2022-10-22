import { clearCellByIndices, drawCellByIndices } from './grid/cell';
import { getCtx } from '../ctx/getter';
import { IMatrix } from '../matrix';
import { drawGrid as _drawGrid } from './grid';

export function drawFromMatrix(
  document: Document,
  next: IMatrix,
  prev?: IMatrix
): void {
  const ctx = getCtx(document);
  const coords = prev ? next.diff(prev) : next.indices();
  for (const [row, col] of coords) {
    if (next.isCellFilled(row, col)) {
      drawCellByIndices(ctx, row, col);
    } else {
      clearCellByIndices(ctx, row, col);
    }
  }
}

export function drawGrid(document: Document): void {
  const ctx = getCtx(document, 'grid');
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  _drawGrid(ctx);
}
