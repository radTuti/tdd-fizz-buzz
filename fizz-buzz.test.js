// fizz-buzz.test.js
const fizzBuzz = require('./fizz-buzz');

test('returns the number input unchanged', () => {
  const expected = 1;
  const actual = fizzBuzz(1);
  expect(actual).toEqual(expected);
});
