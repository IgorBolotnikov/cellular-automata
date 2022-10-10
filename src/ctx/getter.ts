type CanvasId = 'canvas' | 'grid';

export function getCtx(
  doc: Document,
  canvasId?: CanvasId,
  contextId?: '2d'
): CanvasRenderingContext2D;
export function getCtx(
  doc: Document,
  canvasId?: CanvasId,
  contextId?: 'bitmaprenderer'
): ImageBitmapRenderingContext;
export function getCtx(
  doc: Document,
  canvasId?: CanvasId,
  contextId?: 'webgl'
): WebGLRenderingContext;
export function getCtx(
  doc: Document,
  canvasId?: CanvasId,
  contextId?: 'webgl2'
): WebGL2RenderingContext;
export function getCtx(
  doc: Document,
  canvasId?: CanvasId,
  contextId?: string
): RenderingContext;
export function getCtx(
  doc: Document,
  canvasId: CanvasId = 'canvas',
  contextId = '2d'
): RenderingContext {
  const canvas = doc.getElementById(canvasId);
  if (!canvas) {
    throw new Error(`Could not find context with id "${canvasId}"`);
  }
  if (!isCanvas(canvas)) {
    throw new Error(`Element with id "${canvasId}" is not a canvas`);
  }
  const ctx = canvas.getContext(contextId);
  if (!ctx) {
    throw new Error(`canvas with id "${canvasId}" does not have context`);
  }
  return ctx;
}

function isCanvas(el: HTMLElement): el is HTMLCanvasElement {
  return 'getContext' in el;
}
