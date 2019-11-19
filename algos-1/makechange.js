const memoize = require('./memoize.js');

const makeChange = memoize((coins, amount) => {
  if (amount === 0) return 0;

  let minCoins;

  coins.forEach(coin => {
    if (amount - coin >= 0) {
      const currMinCoins = makeChange(coins, amount - coin);

      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });

  return minCoins + 1;
});

module.exports = makeChange;
