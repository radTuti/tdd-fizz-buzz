// fizz-buzz.js
const fizzBuzz = (number) => {
  let output = '';
  if (number % 3 === 0) {
    output += 'Fizz';
  }
  if (number % 5 === 0) {
    output += 'Buzz';
  }
  return output.length === 0 ? number : output;
};

module.exports = fizzBuzz;
