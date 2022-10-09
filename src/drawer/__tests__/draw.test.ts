/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/preact";
import { h } from "preact";
import { drawFromMartix } from "src/drawer/draw";
import { getMatrixFrom2DArray } from "src/matrix";
import * as cell from "../grid/cell";

describe("drawFromMatrix", () => {
  beforeEach(() => {
    render(h("canvas", { id: "canvas" }));
  });

  it("should draw cells for every filled matrix cell", () => {
    const spied = jest.spyOn(cell, "drawCellByIndices");
    const matrix = getMatrixFrom2DArray([
      [1, 0],
      [0, 1],
    ]);
    drawFromMartix(document, matrix);
    expect(spied).toHaveBeenNthCalledWith(1, 0, 0);
    expect(spied).toHaveBeenNthCalledWith(2, 1, 1);
  });
});
