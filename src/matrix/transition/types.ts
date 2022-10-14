import { IMatrix } from '../types';

export type TransitionRule = 'GoL'; // Game of Life
export type TransitionFunction = (matrix: IMatrix) => IMatrix;
