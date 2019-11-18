function joinElements(arr, joinString) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result += `${joinString}${arr[i]}`;
  }

  return result;
}

module.exports = joinElements;