// function multiFn(a, b, c) {
//   return a * b * c;
// }
// function curry(fn) {
//   var args = [].slice.call(arguments,1);
//   return function() {
//     var newArgs = args.concat([].slice.call(arguments, 0))
//     return fn.apply(this, newArgs)
//   }
// }

// function curry(fn, args){
//   var length = fn.length;
//   var args = args || [];
//   return function() {
//     var newArgs = args.concat([].slice.call(arguments, 0))
//     if(newArgs.length < length){
//       return curry.call(this, fn, newArgs)
//     }else {
//       return fn.apply(this,newArgs)
//     }
//   }
// }
// var multi = new curry(multiFn)
// console.log(multi(2)(3,4))
function multi() {
  var args = [].slice.call(arguments)
  var fn = function(){
    var newArgs = args.concat([].slice.call(arguments))
    return multi.apply(this, newArgs)
  }
  fn.toString = function(){
    return args.reduce(function(a,b){
      return a * b;
    })
  }
  return fn;
}
console.log(multi(2)(3)(4))