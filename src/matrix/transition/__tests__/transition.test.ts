import { makeTransition } from 'src/matrix/transition';
import { getMatrixFrom2DArray } from '../../matrix';

describe('gameOfLife', () => {
  it('should leave the cell alive if it has 2 neighbours', () => {
    const matrix = getMatrixFrom2DArray([
      [0, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ]);
    const next = makeTransition('Game of Life', matrix);
    expect(next.isCellFilled(1, 1)).toBe(true);
  });

  it('should leave the cell alive if it has 3 neighbours', () => {
    const matrix = getMatrixFrom2DArray([
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 0],
    ]);
    const next = makeTransition('Game of Life', matrix);
    expect(next.isCellFilled(1, 1)).toBe(true);
  });

  it('should kill the cell if it has >3 neighbours', () => {
    const matrix = getMatrixFrom2DArray([
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 1],
    ]);
    const next = makeTransition('Game of Life', matrix);
    expect(next.isCellFilled(1, 1)).toBe(false);
  });

  it('should kill the cell if it has <2 neighbours', () => {
    const matrix = getMatrixFrom2DArray([
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
    const next = makeTransition('Game of Life', matrix);
    expect(next.isCellFilled(1, 1)).toBe(false);
  });

  it('should make the cell alive if it has 3 neighbours', () => {
    const matrix = getMatrixFrom2DArray([
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0],
    ]);
    const next = makeTransition('Game of Life', matrix);
    expect(next.isCellFilled(1, 1)).toBe(true);
  });
});
