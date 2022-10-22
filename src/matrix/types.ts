export interface IMatrix {
  readonly rows: number;
  readonly cols: number;
  readonly size: number;

  fillCell(xCoord: number, yCoord: number): void;

  clearCell(xCoord: number, yCoord: number): void;

  isCellFilled(xCoord: number, yCoord: number): boolean;

  fillRandom(): void;

  indices(): Iterable<[number, number]>;

  diff(from: IMatrix): Iterable<[number, number]>;

  getNeighborsCount(xCoord: number, yCoord: number): number;

  copy(): IMatrix;
}
