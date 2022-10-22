import {
  getMatrixFrom2DArray,
  getMatrixFromDims,
  randomMatrixFromDims,
} from '../matrix';

describe('getMatrixFromDims', () => {
  it('should return a matrix object of specified dimensions', () => {
    const matrix = getMatrixFromDims(3, 4);
    expect(matrix.rows).toEqual(3);
    expect(matrix.cols).toEqual(4);
    expect(matrix.size).toEqual(3 * 4);
  });

  it('should fill cell at provided coords', () => {
    const matrix = getMatrixFromDims(2, 2);
    matrix.fillCell(1, 1);
    expect(matrix.isCellFilled(1, 1)).toBe(true);
    expect(matrix.isCellFilled(1, 0)).toBe(false);
    expect(matrix.isCellFilled(0, 1)).toBe(false);
    expect(matrix.isCellFilled(0, 0)).toBe(false);
  });

  it('should ignore filling cell at non-existent coords', () => {
    const matrix = getMatrixFromDims(1, 1);
    matrix.fillCell(2, 2);
    expect(matrix.isCellFilled(0, 0)).toBe(false);
  });

  it('should ignore clearing cell at non-existent coords', () => {
    const matrix = getMatrixFromDims(1, 1);
    matrix.fillCell(0, 0);
    matrix.clearCell(2, 2);
    expect(matrix.isCellFilled(0, 0)).toBe(true);
  });

  it('should clear cell at provided coords', () => {
    const matrix = getMatrixFromDims(2, 2);
    matrix.fillCell(1, 1);
    matrix.clearCell(1, 1);
    expect(matrix.isCellFilled(1, 1)).toBe(false);
  });

  it('should return false when checking non-existent cell', () => {
    const matrix = getMatrixFromDims(1, 1);
    matrix.fillCell(0, 0);
    expect(matrix.isCellFilled(3, 3)).toEqual(false);
  });

  it('should allow iteration over indices', () => {
    const matrix = getMatrixFromDims(3, 4);
    const indices = [...matrix.indices()];
    expect(indices).toHaveLength(3 * 4);
    expect(indices[0]).toEqual([0, 0]);
    expect(indices[indices.length - 1]).toEqual([2, 3]);
  });
});

describe('getMatrixFrom2DArray', () => {
  it('should return a matrix object from a 2D array', () => {
    const arr = [
      [0, 1],
      [0, 0],
      [1, 1],
    ];
    const matrix = getMatrixFrom2DArray(arr);
    expect(matrix.rows).toEqual(3);
    expect(matrix.cols).toEqual(2);
    expect(matrix.size).toEqual(3 * 2);
  });

  it('should fill cell at provided coords', () => {
    const arr = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const matrix = getMatrixFrom2DArray(arr);
    matrix.fillCell(0, 1);
    expect(matrix.isCellFilled(0, 0)).toEqual(false);
    expect(matrix.isCellFilled(0, 1)).toEqual(true);
    expect(matrix.isCellFilled(1, 0)).toEqual(false);
    expect(matrix.isCellFilled(1, 1)).toEqual(false);
    expect(matrix.isCellFilled(2, 0)).toEqual(false);
    expect(matrix.isCellFilled(2, 1)).toEqual(false);
  });

  it('should empty cell at provided coords', () => {
    const arr = [
      [1, 1],
      [1, 1],
      [1, 1],
    ];
    const matrix = getMatrixFrom2DArray(arr);
    matrix.clearCell(1, 1);
    expect(matrix.isCellFilled(0, 0)).toEqual(true);
    expect(matrix.isCellFilled(0, 1)).toEqual(true);
    expect(matrix.isCellFilled(1, 0)).toEqual(true);
    expect(matrix.isCellFilled(1, 1)).toEqual(false);
    expect(matrix.isCellFilled(2, 0)).toEqual(true);
    expect(matrix.isCellFilled(2, 1)).toEqual(true);
  });

  it('should ignore filling cell at non-existent coords', () => {
    const matrix = getMatrixFrom2DArray([[0]]);
    matrix.fillCell(2, 2);
    expect(matrix.isCellFilled(0, 0)).toBe(false);
  });

  it('should ignore clearing cell at non-existent coords', () => {
    const matrix = getMatrixFrom2DArray([[1]]);
    matrix.clearCell(2, 2);
    expect(matrix.isCellFilled(0, 0)).toBe(true);
  });

  it('should return false when checking non-existent cell', () => {
    const matrix = getMatrixFrom2DArray([[1]]);
    expect(matrix.isCellFilled(3, 3)).toEqual(false);
  });
});

describe('randomMatrixFromDims', () => {
  it('should create a matrix with random cells', () => {
    const matrix1 = randomMatrixFromDims(5, 5);
    const matrix2 = randomMatrixFromDims(5, 5);
    expect(matrix1).not.toEqual(matrix2);
  });
});

describe('getNeighborsCount method', () => {
  it('should count the number of neighbours for any cell', () => {
    const arr = [
      [0, 1, 1],
      [0, 1, 1],
      [0, 1, 0],
    ];
    const matrix = getMatrixFrom2DArray(arr);
    expect(matrix.getNeighborsCount(1, 1)).toEqual(4); // middle
    expect(matrix.getNeighborsCount(0, 1)).toEqual(3); // top right corner
    expect(matrix.getNeighborsCount(1, 0)).toEqual(3); // left side
  });
});

describe('copy method', () => {
  it('should return an exact copy of an original matrix', () => {
    const arr = [
      [0, 1, 1],
      [0, 1, 1],
      [0, 1, 0],
    ];
    const original = getMatrixFrom2DArray(arr);
    const copied = original.copy();
    expect(copied).toEqual(original);
    original.fillCell(0, 0);
    expect(copied.isCellFilled(0, 0)).toBe(false);
  });
});

describe('diff method', () => {
  it('should return coords with difference in their state', () => {
    const firstArr = [
      [1, 0],
      [0, 0],
    ];
    const first = getMatrixFrom2DArray(firstArr);
    const secondArr = [
      [1, 1],
      [0, 1],
    ];
    const second = getMatrixFrom2DArray(secondArr);
    const expectedDiff = [
      [0, 1],
      [1, 1],
    ];
    expect([...second.diff(first)]).toEqual(expectedDiff);
  });
});
