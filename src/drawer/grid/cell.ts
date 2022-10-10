import { getStepSize } from './step';
import { config } from './config';

type Ctx = CanvasRenderingContext2D;

export function drawCell(ctx: Ctx, xCoord: number, yCoord: number): void {
  const [closestX, closestY] = closestCellCoords(xCoord, yCoord);
  drawCellByCoords(ctx, closestX, closestY);
}

export function drawCellByIndices(ctx: Ctx, row: number, column: number): void {
  const xCoord = row * config.cell.size;
  const yCoord = column * config.cell.size;
  drawCellByCoords(ctx, xCoord, yCoord);
}

function closestCellCoords(xCoord: number, yCoord: number): [number, number] {
  const step = getStepSize();
  const closestX = xCoord - (xCoord % step);
  const closestY = yCoord - (yCoord % step);
  return [closestX, closestY];
}

function drawCellByCoords(ctx: Ctx, xCoord: number, yCoord: number): void {
  ctx.fillStyle = config.cell.color;
  ctx.beginPath();
  ctx.rect(xCoord, yCoord, config.cell.size, config.cell.size);
  ctx.fill();
}
