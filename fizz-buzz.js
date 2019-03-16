// fizz-buzz.js
const fizzBuzz = (number) => {
  let output = '';
  if (number % 3 === 0) {
    output += 'Fizz';
  }
  if (number % 5 === 0) {
    output += 'Buzz';
  }
  return output || number;
};

module.exports = fizzBuzz;
