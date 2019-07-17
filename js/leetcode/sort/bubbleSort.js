function bubbleSort(arr) {
  let len = arr.length
  let minIndex, temp;
  for(var i = 0; i < len - 1; i++) {
    minIndex = i
    for(var j = i + 1; j < len; j++ ) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

const arr = [9,6,7,3,4,2,5]

// 每次让一个数排好 两两交换位置
console.log(bubbleSort(arr))