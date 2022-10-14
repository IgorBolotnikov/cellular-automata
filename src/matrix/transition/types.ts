import { IMatrix } from '../types';

export type RuleName =
  | 'Replicator'
  | 'Seeds'
  | 'Life without Death'
  | 'Game of Life'
  | '34 Life'
  | 'Diamoeba'
  | '2x2'
  | 'HighLife'
  | 'Day & Night'
  | 'Morley'
  | 'Anneal';
export type TransitionFunction = (name: RuleName, matrix: IMatrix) => IMatrix;

/**
 * Notation of the rule in the following format: By/Sx.
 * x and y is a sequence of digits from 0 to 8.
 * The presence of a digit d in the x string means
 * that a live cell with d live neighbors survives
 * into the next generation of the pattern,
 * and the presence of d in the y string means
 * that a dead cell with d live neighbors becomes alive
 * in the next generation.
 * Thus, in this notation, Conway's Game of Life is denoted B3/S23.
 */
export type RuleNotation = string;
