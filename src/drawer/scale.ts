export function adjustScale(ctx: CanvasRenderingContext2D): void {
  const width = window.innerWidth;
  const height = window.innerHeight;
  ctx.canvas.style.width = `${width}px`;
  ctx.canvas.style.height = `${height}px`;
  const scale = window.devicePixelRatio;
  ctx.canvas.width = Math.floor(width * scale);
  ctx.canvas.height = Math.floor(height * scale);
  ctx.scale(scale, scale);
}
