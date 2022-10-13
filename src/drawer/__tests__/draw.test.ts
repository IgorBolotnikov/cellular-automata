/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/preact';
import { h } from 'preact';
import { drawFromMatrix } from 'src/drawer/draw';
import { getMatrixFrom2DArray } from 'src/matrix';
import * as cell from '../grid/cell';
import { getCtx } from 'src/ctx/getter';

describe('drawFromMatrix', () => {
  beforeEach(() => {
    render(h('canvas', { id: 'canvas' }));
  });

  it('should draw cells for every filled matrix cell', () => {
    const spied = jest.spyOn(cell, 'drawCellByIndices');
    const matrix = getMatrixFrom2DArray([
      [1, 0],
      [0, 1],
    ]);
    drawFromMatrix(document, matrix);
    const ctx = getCtx(document);
    expect(spied).toHaveBeenNthCalledWith(1, ctx, 0, 0);
    expect(spied).toHaveBeenNthCalledWith(2, ctx, 1, 1);
  });
});
