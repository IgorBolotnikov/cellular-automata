type Ctx = CanvasRenderingContext2D;

const config = {
  line: {
    width: 1,
    // color: '#444444',
    color: "#000000",
  },
  cellSize: 39,
};

export function drawGrid(ctx: Ctx): void {
  const maxWidth = ctx.canvas.width;
  const maxHeight = ctx.canvas.height;
  const step = config.cellSize + config.line.width;
  for (let x = step; x <= maxWidth; x += step) {
    drawVerticalLine(ctx, x, maxHeight);
  }
  for (let y = step; y <= maxHeight; y += step) {
    drawHorizontalLines(ctx, y, maxWidth);
  }
}

function drawVerticalLine(ctx: Ctx, xCoord: number, height: number): void {
  ctx.beginPath();
  ctx.moveTo(xCoord, 0);
  ctx.lineWidth = config.line.width;
  ctx.lineTo(xCoord, height);
  ctx.strokeStyle = config.line.color;
  ctx.stroke();
}

function drawHorizontalLines(ctx: Ctx, yCoord: number, width: number): void {
  ctx.beginPath();
  ctx.moveTo(0, yCoord);
  ctx.lineWidth = config.line.width;
  ctx.lineTo(width, yCoord);
  ctx.strokeStyle = config.line.color;
  ctx.stroke();
}