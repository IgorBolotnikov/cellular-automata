import { rules } from './rules';
import { RuleName, TransitionFunction } from './types';

interface CellRules {
  birth: Set<number>;
  survival: Set<number>;
}

export const makeTransition: TransitionFunction = (name, matrix) => {
  const cellRules = getCellRulesFromNotation(name);
  const next = matrix.copy();
  for (const [x, y] of matrix.indices()) {
    const prevState = matrix.isCellFilled(x, y);
    const neighboursCount = matrix.getNeighborsCount(x, y);
    const nextFilled = nextCellState(prevState, neighboursCount, cellRules);
    if (nextFilled) {
      next.fillCell(x, y);
    } else {
      next.clearCell(x, y);
    }
  }
  return next;
};

function nextCellState(
  prevState: boolean,
  neighboursCount: number,
  cellRules: CellRules
): boolean {
  if (prevState) {
    return cellRules.survival.has(neighboursCount);
  }
  return cellRules.birth.has(neighboursCount);
}

function getCellRulesFromNotation(name: RuleName): CellRules {
  const notation = rules[name];
  const [bNums, sNums] = notation.split('/');
  return {
    birth: new Set<number>(bNums.slice(1).split('').map(Number)),
    survival: new Set<number>(sNums.slice(1).split('').map(Number)),
  };
}
