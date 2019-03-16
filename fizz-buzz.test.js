// fizz-buzz.test.js
const fizzBuzz = require('./fizz-buzz');

let expected;
let actual;

test('returns the number input unchanged if not divisible by 3 or 5', () => {
  expected = 1;
  actual = fizzBuzz(1);
  expect(actual).toEqual(expected);
});

test('returns Fizz if number is divible by 3', () => {
  expected = 'Fizz';
  actual = fizzBuzz(6);
  expect(actual).toEqual(expected);
});

test('returns Buzz if number is divible by 5', () => {
  expected = 'Buzz';
  actual = fizzBuzz(10);
  expect(actual).toEqual(expected);
});
