const throwError = require('./error');

test('function should throw an error', () => {
  expect(() => throwError()).toThrow('Something went wrong!');
});

