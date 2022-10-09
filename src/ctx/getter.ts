export function getCtx(
  doc: Document,
  contextId?: "2d"
): CanvasRenderingContext2D;
export function getCtx(
  doc: Document,
  contextId?: "bitmaprenderer"
): ImageBitmapRenderingContext;
export function getCtx(
  doc: Document,
  contextId?: "webgl"
): WebGLRenderingContext;
export function getCtx(
  doc: Document,
  contextId?: "webgl2"
): WebGL2RenderingContext;
export function getCtx(doc: Document, contextId?: string): RenderingContext;
export function getCtx(doc: Document, contextId = "2d"): RenderingContext {
  const canvas = doc.getElementById("canvas");
  if (!canvas) {
    throw new Error('Could not find context with id "canvas"');
  }
  if (!isCanvas(canvas)) {
    throw new Error('Element with id "canvas" is not a canvas');
  }
  const ctx = canvas.getContext(contextId);
  if (!ctx) {
    throw new Error("canvas does not have context");
  }
  return ctx;
}

function isCanvas(el: HTMLElement): el is HTMLCanvasElement {
  return "getContext" in el;
}
