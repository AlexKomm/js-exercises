const bubbleSort = list => {
  var swapped;

  do {
    swapped = false;
    
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i+1]) {
        swap(list, i, i+1);
        swapped = true;
      }
    }
  }
  while (swapped);

  return list;

  function swap(arr, l, r) {
    const val = arr[l];

    arr[l] = arr[r];
    arr[r] = val;

    return arr;
  }
};

module.exports = bubbleSort;