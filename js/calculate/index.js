// 会计 计算年终奖
//  绩效 S 5  A 3 B 2 C 1 D
// 可以如何优化？ 分支太多，计算策略太简陋 会计发钱，制定发钱策略的区分开来，

var 
var perfomanceS = function(salary){
    return salary * 5;
}
var perfomanceA = function(salary){
    return salary * 4;
}

var calculateBounce = function(perfomanceLevel, salary){
    if(perfomanceLevel === 'S') {
        return perfomanceS(salary);
    }
    if(perfomanceLevel === 'A') {
        return perfomanceA(salary);
    }
}

console.log(calculateBounce('S',20000))
console.log(calculateBounce('A',20000))