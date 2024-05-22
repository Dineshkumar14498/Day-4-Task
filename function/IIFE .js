//1 (b)print odd number in an array (IIFE Funtion method)

var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


//1 (b)convert all the string to title caps in a string array ( IIFE Funtion method)
var result = [];
(function title(arr) {
  var res = arr.toString();
  var data = res.toLowerCase().split(" ");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
    result.push(data[i]);
  }
  console.log(result.join(" "));
})(["tHIS iS ThE TyPe OF FuNCtion"]);

//1 (c) SUM OF ALL NUMBER IN AN ARRAY ( IIFE Funtion method)
(function sum (...arr){
  let total =0
  for (var i=0;i<arr.length;i++){
    total += arr[i]
  
  }
   return total
  })
  console.log(sum(11,12,13,14,15,16,17,18,19));


  //1 (d) Return all prime Number in an array (IIFE function menthod)

(function prime  (val) {
  for (let factor = 2; factor < val; factor++) {
    if (val % factor === 0) return false;
  }
  return true;
});
 
const Primenum=(function(till){
    let PrimeNumbers=[];
    for (let value = 2; value <=till;value++){
        if (prime(value))
            PrimeNumbers.push(value)

    }
    return PrimeNumbers;

})
console.log(Primenum(30));
