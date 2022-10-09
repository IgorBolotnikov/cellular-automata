import { getCtx } from '../../ctx/getter';
import { getStepSize } from './step';
import { config } from './config';

export function drawCell(document: Document, xCoord: number, yCoord: number): void {
  const ctx = getCtx(document);
  ctx.fillStyle = config.cell.color;
  const [closestX, closestY] = closestCellCoords(xCoord, yCoord);
  ctx.rect(closestX, closestY, config.cell.size, config.cell.size);
  ctx.fill();
}

function closestCellCoords(xCoord: number, yCoord: number): [number, number] {
  const step = getStepSize();
  const closestX = xCoord - xCoord % step;
  const closestY = yCoord - yCoord % step;
  return [closestX, closestY];
}
