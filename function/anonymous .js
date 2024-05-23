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
function sum(...arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//1 (d) Return all prime Number in an array (anonymous function menthod)

var result = [];
function prime(arr) {
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
}
console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//1 (E) Return all the palindromes in an array (anonymous function menthod)

function palindrome(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var data = arr[i].split("").reverse().join("");
    if (data === arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(palindrome(["dad", "mom"]));

//1 (f) Return median of two sorted arrays of the same size(anonymous function menthod)

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 9];
function median(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  arr.sort((a, b) => a - b);
  let n = arr.length;
  if (n % 2 === 0) {
    return (arr[n / 2] + arr[n - 1] / 2) / 2;
  } else {
    return arr[Math.floor(n / 2)];
  }
}
console.log(median(arr1, arr2));

//1 (g) Remove duplicate from an array (anonymous function menthod)

function removeDuplicates(new_array) {
  var collect = [];
  for (var value of new_array) {
    if (collect.indexOf(value) === -1) {
      collect.push(value);
    }
  }
  return collect;
}
var colors = ["green", "black", "black"];
console.log(removeDuplicates(colors));

//1 (H) Rotate an array by k time (anonymous function menthod)

const arr = [1, 2, 3, 4, 5];
const K = 3;
function Rotate(arr, K) {
  for (var i = 0; i < K; i++) {
    arr.push(arr[i]);
  }
  for (var i = 0; i < K; i++) {
    arr.shift();
  }
  return arr;
}
console.log(Rotate(arr, K));
