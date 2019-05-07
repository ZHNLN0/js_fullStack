function flatten(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  // 1 递归 将多层数组的扁平化分为多个
  // 一堆数组跟旁边的数组 concat 小问题
  // 推出条件是不在有数组
  const flattenArr = arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
  return flattenArr;
}

const arr = [1, 2,[3,4[5]]];
flatten(arr);