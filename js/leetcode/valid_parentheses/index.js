let arr = [];               //数据集合
arr.push("{");

arr.push("}");
 console.log(arr);
arr.pop();  
 console.log(arr);
arr.unshift("]");
console.log(arr);
arr.shift();
console.log('--------------',arr);
arr.forEach(item =>{
    console.log(item);
})

