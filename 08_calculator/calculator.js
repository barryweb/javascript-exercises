const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current)
};

const power = function(a, b) {
    return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) return 1;

  let product = 1;
  for( let x = n; x > 0; x--)
  {
    product *= x;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
