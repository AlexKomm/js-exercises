const mergeSort = list => {
  if (list.length < 2) return list;

  const halfIndex = Math.floor(list.length / 2);
  
  const leftSide = list.slice(0, halfIndex);
  const rightSide = list.slice(halfIndex, list.length);

  const sortedLeft = mergeSort(leftSide);
  const sortedRight = mergeSort(rightSide);

  return merge(sortedLeft, sortedRight);

  function merge(left, right) {
    const result = [];
    
    while (left.length > 0 || right.length > 0) {
      if (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
          result.push(left.shift());
        }
        else {
          result.push(right.shift());
        }
      }
      else if (left.length > 0) {
        result.push(left.shift());
      }
      else {
        result.push(right.shift());
      }
    }

    return result;
  }
};


module.exports = mergeSort;