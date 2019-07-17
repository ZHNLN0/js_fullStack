function bubbleSort(arr) {
  let len = arr.length, temp;
  for(var i = 0; i < len; i++) {
    for(var j = 0; j < len -1 -i; j++) {
      if(arr[j] > arr[j + 1]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}

console.log(bubbleSort([3,6,8,5,3,4,2]))