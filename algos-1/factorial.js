const memoize = require('./memoize.js');

const factorial = memoize(n => {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
});

module.exports = memoize(factorial);