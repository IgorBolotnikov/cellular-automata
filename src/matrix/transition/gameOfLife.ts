import { TransitionFunction } from './types';

/**
 * Rules:
 * 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
 * 2. Any live cell with two or three live neighbours lives on to the next generation.
 * 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
 * 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 */
export const gameOfLife: TransitionFunction = (matrix) => {
  const next = matrix.copy();
  for (const [x, y] of matrix.indices()) {
    const prevState = matrix.isCellFilled(x, y);
    const neighboursCount = matrix.getNeighborsCount(x, y);
    const nextFilled = nextCellState(prevState, neighboursCount);
    if (nextFilled) {
      next.fillCell(x, y);
    } else {
      next.clearCell(x, y);
    }
  }
  return next;
};

function nextCellState(prevState: boolean, neighboursCount: number): boolean {
  if (prevState) {
    return neighboursCount >= 2 && neighboursCount <= 3;
  }
  return neighboursCount === 3;
}
