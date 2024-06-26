//2 (a)print odd number in an array (arrow Funtion method)
var result = [];
var odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd([21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));

//2 (b)convert all the string to title caps in a string array ( arrow Funtion method)
var titlecase = (arr) => {
  var res = arr.toString();
  var data = res.toLowerCase().split(" ");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
  }
  return data.join(" ");
};
console.log(titlecase(["tHIS iS ThE TyPe OF FuNCtion"]));

//1 (c) SUM OF ALL NUMBER IN AN ARRAY ( arrow Funtion method)
let array = (...arr) => {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
console.log(array(21, 22, 23, 24, 25, 26, 27, 28, 29));

//1 (d) Return all prime Number in an array (arrow function menthod)

var result = [];
const primenum = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count = 1;
      }
    }
    if (count === 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(
  primenum([
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  ])
);

//2 (E) Return all the palindromes in an array (arrow function menthod)

let pal = (arr) => {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var data = arr[i].split("").reverse().join("");
    if (data === arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(pal(["dad", "mom"]));
