// fizz-buzz.test.js
const fizzBuzz = require('./fizz-buzz');

test('returns the number input unchanged if not divisible by 3', () => {
  const expected = 1;
  const actual = fizzBuzz(1);
  expect(actual).toEqual(expected);
});

test('returns Fizz if number is divible by 3', () => {
  const expected = 'Fizz';
  const actual = fizzBuzz(6);
  expect(actual).toEqual(expected);
});
