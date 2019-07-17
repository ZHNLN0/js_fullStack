// 快排，
// 抽象 a b c  递归

function quickSort(arr) {
  if(arr.length <= 1) {
    return arr
  }
  var left = [], right = [], baseDot = Math.round(arr.length / 2),base = arr.splice(baseDot, 1)[0]
  
  // 中间值
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < base) {
      left.push(arr[i])
    }else {
      right.push(arr[i]) 
    }
  }
 
  // left a 
  // base 中间值
  // right b 
  return quickSort(left).concat([base], quickSort(right))
}

console.log(quickSort([1,2,3,9,5,6,7]));