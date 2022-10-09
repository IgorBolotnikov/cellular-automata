import { config } from './config';

export function getStepSize(): number {
  return config.cell.size;
}
