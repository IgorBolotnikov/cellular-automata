import { getCtx } from '../../ctx/getter';
import { config } from './config';

export function getGridSize(document: Document): [number, number] {
  const ctx = getCtx(document);
  const maxRows = Math.floor(ctx.canvas.width / config.cell.size);
  const maxCols = Math.floor(ctx.canvas.height / config.cell.size);
  return [maxRows, maxCols];
}
