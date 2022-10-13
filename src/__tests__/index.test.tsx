// noinspection JSConstantReassignment

/**
 * @jest-environment jsdom
 */
/** @jsx h */
import { h } from 'preact';
import { act, fireEvent, render, screen } from '@testing-library/preact';
import App from 'src/index';
import * as drawer from 'src/drawer/draw';
import * as cell from 'src/drawer/grid/cell';

function resizeWindow(width: number, height: number): void {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event('resize'));
}

describe('App', () => {
  beforeEach(() => {
    window.innerWidth = 1024;
    window.innerHeight = 768;
  });

  it('should render a canvas', () => {
    render(<App />);
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });

  it('should resize canvas when window is resized', () => {
    render(<App />);
    let canvas = screen.getByTestId<HTMLCanvasElement>('canvas');
    expect(canvas.width).toEqual(1024);
    expect(canvas.height).toEqual(768);
    resizeWindow(400, 200);
    canvas = screen.getByTestId<HTMLCanvasElement>('canvas');
    expect(canvas.width).toEqual(400);
    expect(canvas.height).toEqual(200);
  });

  it('should draw grid on canvas', () => {
    const drawGrid = jest.spyOn(drawer, 'drawGrid');
    void act(() => {
      render(<App />);
    });
    expect(drawGrid).toHaveBeenCalled();
  });

  it('should draw a cell when clicking on canvas', () => {
    void act(() => {
      render(<App />);
    });
    const drawCell = jest.spyOn(cell, 'drawCell');
    void act(() => {
      fireEvent.click(screen.getByTestId('canvas'));
    });
    expect(drawCell).toHaveBeenCalled();
  });
});
