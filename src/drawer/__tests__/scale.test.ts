/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/preact';
import { h } from 'preact';
import { getCtx } from 'src/ctx/getter';
import { adjustScale } from 'src/drawer/scale';

describe('adjustScale', () => {
  it('should adjust scale according to window DPR', () => {
    window.devicePixelRatio = 2;
    window.innerWidth = 200;
    window.innerHeight = 100;
    render(h('canvas', { width: 200, height: 100, id: 'canvas' }));
    const ctx = getCtx(document);
    adjustScale(ctx);
    expect(ctx.canvas.width).toEqual(400);
    expect(ctx.canvas.height).toEqual(200);
    expect(ctx.canvas.style.width).toEqual('200px');
    expect(ctx.canvas.style.height).toEqual('100px');
  });
});
