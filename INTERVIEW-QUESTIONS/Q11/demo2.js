function findKthLargest(nums, k) {
  const arr = quick_sort(nums)
  return arr[k-1]
}

function quick_sort(arr) {
  if (arr.length <= 1) return arr;
  var left = [],
      right = [],
      baseDot = Math.round(arr.length / 2),
      base = arr.splice(baseDot, 1)[0];
  for(var i = 0; i < arr.length; i++) { //O(n)
    if(arr[i] < base) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }
  return quick_sort(left).concat([basse], quick_sort(right)); // O(log2N)
}