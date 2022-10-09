// noinspection JSConstantReassignment

/**
 * @jest-environment jsdom
 */
/** @jsx h */
import { h } from "preact";
import { act, render, screen } from "@testing-library/preact";
import App from "src/index";
import * as drawer from "src/drawer/draw";

function resizeWindow(width: number, height: number): void {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
}

describe("App", () => {
  beforeEach(() => {
    window.innerWidth = 1024;
    window.innerHeight = 768;
  });

  it("should render a canvas", () => {
    render(<App />);
    expect(screen.getByTestId("canvas")).toBeInTheDocument();
  });

  it("should resize canvas when window is resized", () => {
    render(<App />);
    let canvas = screen.getByTestId<HTMLCanvasElement>("canvas");
    expect(canvas.width).toEqual(1024);
    expect(canvas.height).toEqual(768);
    resizeWindow(400, 200);
    canvas = screen.getByTestId<HTMLCanvasElement>("canvas");
    expect(canvas.width).toEqual(400);
    expect(canvas.height).toEqual(200);
  });

  it("should draw on canvas", () => {
    const draw = jest.spyOn(drawer, "draw");
    void act(() => {
      render(<App />);
    });
    expect(draw).toHaveBeenCalled();
  });
});
