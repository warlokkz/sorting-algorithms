function insertionSort (array) {
  var current;
  for (var i = 0; i < array.length; i++) {
    current = array[i];
    var j = i - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }

  return array;
}

module.exports = insertionSort;