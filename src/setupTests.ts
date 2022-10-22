import '@testing-library/jest-dom';

function isMocked(smth: unknown): smth is jest.Mock {
  return !!smth && typeof smth === typeof jest.fn;
}

beforeAll(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
    cb(0);
    return 0;
  });
});

afterAll(() => {
  const method = window.requestAnimationFrame;
  if (isMocked(method)) {
    method.mockRestore();
  }
});
