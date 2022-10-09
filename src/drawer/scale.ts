export function adjustScale(ctx: CanvasRenderingContext2D): void {
  // This code resizes canvas one extra time since the initial size was set.
  // TODO: Need to remove the extra resize.
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  ctx.canvas.style.width = `${width}px`;
  ctx.canvas.style.height = `${height}px`;
  const scale = window.devicePixelRatio;
  ctx.canvas.width = Math.floor(width * scale);
  ctx.canvas.height = Math.floor(height * scale);
  ctx.scale(scale, scale);
}
