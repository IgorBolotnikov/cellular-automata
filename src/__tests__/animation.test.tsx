/**
 * @jest-environment jsdom
 */
/** @jsx h */
import { h } from 'preact';
import App from 'src/index';
import * as drawer from 'src/drawer/draw';
import { fireEvent, render } from '@testing-library/preact';
import { config } from 'src/config';

const drawFromMatrixMock = jest.spyOn(drawer, 'drawFromMatrix');

describe('canvas animation', () => {
  beforeEach(() => {
    drawFromMatrixMock.mockReset();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should redraw from matrix according to fps settings', () => {
    render(<App />);
    jest.advanceTimersByTime(1000 / config.fps / 2);
    expect(drawFromMatrixMock).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000 / config.fps);
    expect(drawFromMatrixMock).toHaveBeenCalledTimes(2);
  });

  it('should pause only animation when pressing space', () => {
    render(<App />);
    jest.advanceTimersByTime(1000 / config.fps / 2);
    expect(drawFromMatrixMock).toHaveBeenCalledTimes(1);
    fireEvent.keyPress(window, { key: '\n', code: 'Enter' });
    jest.advanceTimersByTime(1000 / config.fps);
    expect(drawFromMatrixMock).toHaveBeenCalledTimes(2);
    fireEvent.keyPress(window, { key: ' ', code: 'Space' });
    jest.advanceTimersByTime(1000 / config.fps);
    expect(drawFromMatrixMock).toHaveBeenCalledTimes(2);
  });

  it('should resume animation when pressing space second time', () => {
    render(<App />);
    jest.advanceTimersByTime(1000 / config.fps / 2);
    expect(drawFromMatrixMock).toHaveBeenCalledTimes(1);
    fireEvent.keyPress(window, { key: ' ', code: 'Space' });
    jest.advanceTimersByTime(1000 / config.fps);
    expect(drawFromMatrixMock).toHaveBeenCalledTimes(1);
    fireEvent.keyPress(window, { key: ' ', code: 'Space' });
    jest.advanceTimersByTime(1000 / config.fps);
    expect(drawFromMatrixMock).toHaveBeenCalledTimes(2);
  });
});
