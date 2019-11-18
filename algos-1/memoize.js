module.exports = function memoize(cb) {
  const cache = {};

  return (...args) => {
    const cacheKey = JSON.stringify(args);

    if (!(cacheKey in cache)) {
      cache[cacheKey] = cb.apply(null, args);
    }

    return cache[cacheKey];
  }
}