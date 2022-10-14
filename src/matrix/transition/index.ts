import { TransitionFunction, TransitionRule } from './types';
import { gameOfLife } from './gameOfLife';

const transitionRules: Record<TransitionRule, TransitionFunction> = {
  GoL: gameOfLife,
};

export function getTransitionFunction(
  name: TransitionRule
): TransitionFunction {
  return transitionRules[name];
}
