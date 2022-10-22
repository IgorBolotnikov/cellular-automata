import { getStepSize } from './step';
import { config } from './config';

type Ctx = CanvasRenderingContext2D;

export function drawCell(ctx: Ctx, xCoord: number, yCoord: number): void {
  const [closestX, closestY] = closestCellCoords(xCoord, yCoord);
  drawCellByCoords(ctx, closestX, closestY, config.cell.color);
}

export function drawCellByIndices(ctx: Ctx, row: number, column: number): void {
  const xCoord = row * config.cell.size;
  const yCoord = column * config.cell.size;
  drawCellByCoords(ctx, xCoord, yCoord, config.cell.color);
}

export function clearCellByIndices(
  ctx: Ctx,
  row: number,
  column: number
): void {
  const xCoord = row * config.cell.size;
  const yCoord = column * config.cell.size;
  ctx.clearRect(xCoord, yCoord, config.cell.size, config.cell.size);
}

function closestCellCoords(xCoord: number, yCoord: number): [number, number] {
  const step = getStepSize();
  const closestX = xCoord - (xCoord % step);
  const closestY = yCoord - (yCoord % step);
  return [closestX, closestY];
}

function drawCellByCoords(
  ctx: Ctx,
  xCoord: number,
  yCoord: number,
  color: string
): void {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.rect(xCoord, yCoord, config.cell.size, config.cell.size);
  ctx.fill();
}
