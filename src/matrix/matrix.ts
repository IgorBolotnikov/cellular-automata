import { config } from "./config";
import type { IMatrix } from "./types";

class Matrix implements IMatrix {
  private _rows!: number;
  private _cols!: number;
  private matrix!: number[][];

  private filledCell = 1;
  private emptyCell = 0;

  static fromDimensions(rows: number, cols: number): IMatrix {
    const matrix = new Matrix();
    matrix._rows = rows;
    matrix._cols = cols;
    matrix.matrix = new Array<number[]>(rows)
      .fill([])
      .map(() => new Array<number>(cols).fill(matrix.emptyCell));
    return matrix;
  }

  static from2DArray(arr: number[][]): IMatrix {
    const matrix = new Matrix();
    matrix._rows = arr.length;
    matrix._cols = arr[0].length;
    matrix.matrix = arr.map((subArr) => [...subArr]);
    return matrix;
  }

  get rows(): number {
    return this._rows;
  }

  get cols(): number {
    return this._cols;
  }

  get size(): number {
    return this._rows * this._cols;
  }

  fillCell(xCoord: number, yCoord: number): void {
    if (this.areValidCoords(xCoord, yCoord)) {
      this.matrix[xCoord][yCoord] = this.filledCell;
    }
  }

  clearCell(xCoord: number, yCoord: number): void {
    if (this.areValidCoords(xCoord, yCoord)) {
      this.matrix[xCoord][yCoord] = this.emptyCell;
    }
  }

  isCellFilled(xCoord: number, yCoord: number): boolean {
    if (!this.areValidCoords(xCoord, yCoord)) {
      return false;
    }
    return this.matrix[xCoord][yCoord] === this.filledCell;
  }

  fillRandom(): void {
    for (let row = 0; row < this._rows; row++) {
      for (let col = 0; col < this._cols; col++) {
        this.matrix[row][col] = this.randomCellValue();
      }
    }
  }

  *indices(): Iterable<[number, number]> {
    for (let row = 0; row < this._rows; row++) {
      for (let col = 0; col < this._cols; col++) {
        yield [row, col];
      }
    }
  }

  private areValidCoords(xCoord: number, yCoord: number): boolean {
    try {
      return typeof this.matrix[xCoord][yCoord] === "number";
    } catch {
      return false;
    }
  }

  private randomCellValue(): number {
    return Math.random() >= config.cellFilledBias
      ? this.filledCell
      : this.emptyCell;
  }
}

/**
 * Get a Matrix instance of a certain dimensions filled with empty cells.
 *
 * Matrix indices are 0-based.
 *
 * @param rows number of rows
 * @param cols number of columns
 */
export function getMatrixFromDims(rows: number, cols: number): IMatrix {
  return Matrix.fromDimensions(rows, cols);
}

/**
 * Get a Matrix instance from a provided 2D array.
 *
 * @param from2DArr 2D array with first index as rows and second as columns
 */

export function getMatrixFrom2DArray(from2DArr: number[][]): IMatrix {
  return Matrix.from2DArray(from2DArr);
}

/**
 * Get a Matrix instance of a certain dimensions filled with randomly filled cells.
 *
 * Matrix indices are 0-based.
 *
 * @param rows number of rows
 * @param cols number of columns
 */

export function randomMatrixFromDims(rows: number, cols: number): IMatrix {
  const matrix = Matrix.fromDimensions(rows, cols);
  matrix.fillRandom();
  return matrix;
}
