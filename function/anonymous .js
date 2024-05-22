//1 (a)print odd number in an array ( anonymous Funtion method)

var result = [];
var a = function odd(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//1 (b)convert all the string to title caps in a string array ( anonymous Funtion method)
function titlecase(arr) {
    var res = arr.toString();
    var data = res.toLowerCase().split(" ");
    for (var i = 0; i < data.length; i++) {
      data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
    }
    return data.join(" ");
  }
  console.log(titlecase(["tHIS iS ThE TyPe OF FuNCtion"]));

  
//1 (c) SUM OF ALL NUMBER IN AN ARRAY ( anonymous Funtion method)
function sum (...arr){
let total =0
for (var i=0;i<arr.length;i++){
  total += arr[i]

}
 return total
}
console.log(sum(1,2,3,4,5,6,7,8,9));


//1 (d) Return all prime Number in an array (anonymous function menthod)

function prime  (val) {
  for (let factor = 2; factor < val; factor++) {
    if (val % factor === 0) return false;
  }
  return true;
};
 
const PrimeTill=function(till){
    let PrimeNumbers=[];
    for (let value = 2; value <=till;value++){
        if (prime(value))
            PrimeNumbers.push(value)

    }
    return PrimeNumbers;

}
console.log(PrimeTill(20));
