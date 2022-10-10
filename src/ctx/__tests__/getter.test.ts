/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/preact';
import { h } from 'preact';
import { getCtx } from 'src/ctx/getter';

describe('Context getter', () => {
  it('should return a context', () => {
    render(h('canvas', { id: 'canvas' }));
    const ctx = getCtx(document);
    expect(ctx).not.toBeNull();
  });

  it('should raise error when canvas is not found', () => {
    expect(() => getCtx(document)).toThrow(Error);
  });

  it('should raise error when canvas is not an actual canvas', () => {
    render(h('div', { id: 'canvas' }));
    expect(() => getCtx(document)).toThrow(Error);
  });

  it('should raise error when canvas has other than 2d context', () => {
    render(h('canvas', { id: 'canvas' }));
    expect(() => getCtx(document, 'canvas', 'invalid')).toThrow(Error);
  });
});
