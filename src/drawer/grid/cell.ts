import { getCtx } from '../../ctx/getter';
import { getStepSize } from './step';
import { config } from './config';

export function drawCell(
  document: Document,
  xCoord: number,
  yCoord: number
): void {
  const [closestX, closestY] = closestCellCoords(xCoord, yCoord);
  drawCellByCoords(document, closestX, closestY);
}

export function drawCellByIndices(
  document: Document,
  row: number,
  column: number
): void {
  const xCoord = row * config.cell.size;
  const yCoord = column * config.cell.size;
  drawCellByCoords(document, xCoord, yCoord);
}

function closestCellCoords(xCoord: number, yCoord: number): [number, number] {
  const step = getStepSize();
  const closestX = xCoord - (xCoord % step);
  const closestY = yCoord - (yCoord % step);
  return [closestX, closestY];
}

function drawCellByCoords(
  document: Document,
  xCoord: number,
  yCoord: number
): void {
  requestAnimationFrame(() => {
    const ctx = getCtx(document);
    ctx.fillStyle = config.cell.color;
    ctx.rect(xCoord, yCoord, config.cell.size, config.cell.size);
    ctx.fill();
  });
}
