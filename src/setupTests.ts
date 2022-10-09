import '@testing-library/jest-dom';

function isMocked(smth: unknown): smth is jest.Mock {
  return !!smth && typeof smth === typeof jest.fn;
}

beforeEach(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
    cb(0);
    return Math.random();
  });
});

afterEach(() => {
  const method = window.requestAnimationFrame;
  if (isMocked(method)) {
    method.mockRestore();
  }
});
