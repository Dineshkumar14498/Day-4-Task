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
(function sum(...arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
});
console.log(sum(11, 12, 13, 14, 15, 16, 17, 18, 19));

//1 (d) Return all prime Number in an array (IIFE function menthod)

var result = [];
(function prime(arr) {
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
});
console.log(prime([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

//1 (E) Return all the palindromes in an array (IIFE function menthod)

(function palindrome(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var data = arr[i].split("").reverse().join("");
    if (data === arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
});
console.log(palindrome(["dad", "mom"]));

//1 (f) Return median of two sorted arrays of the same size(IIFE function menthod)

let sort1 = [11, 13, 15, 17, 18, 19];
let sort2 = [21, 24, 26, 28, 29, 30, 31];
(function median(sort1, sort2) {
  let arr = [...sort1, ...sort2];
  arr.sort((a, b) => a - b);
  let n = arr.length;

  if (n % 2 === 0) {
    return (arr[n / 2] + arr[n - 1] / 2) / 2;
  } else {
    return arr[Math.floor(n / 2)];
  }
});
console.log(median(arr1, arr2));

//1 (g) Remove duplicate from an array (IIFE function menthod)

(function (array) {
  let dup = [...new Set(array)];
  console.log(dup);
})([1, 1, 2, 2, 3, 4]);

//1 (H) Rotate an array by k time (IIFE function menthod)

const arr3 = [11, 12, 13, 14, 15];
const d = 3;
(function Rotate(arr, K) {
  for (var i = 0; i < K; i++) {
    arr.push(arr[i]);
  }
  for (var i = 0; i < K; i++) {
    arr.shift();
  }
  return arr;
});
console.log(Rotate(arr, K));
