var PerformanceS = function(){

}
PerformanceS.prototype.calculate = function(salary){
    return salary * 5;
}
var PerformanceA = function(){

}
PerformanceA.prototype.calculate = function(salary){
    return salary * 4;
}

var Bounce = function(salary){
    this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy){
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function(){
    return this.strategy.calculate(this.salary);
}

var Bounce = new Bounce(4000);
Bounce.setStrategy(new PerformanceS());
console.log(Bounce.getBounce());

