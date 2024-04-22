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

//1 (c) SUM OF ALL NUMBER IN AN ARRAY ( anonymous Funtion method)
  var a= function add([a,b,c,d,e,f]) {
      return a+b+c+d+e+f.split("");
    
  }
   console.log (add=([1, 2, 3, 4, 5, 6]));


 (function add(a,b,c,d,e,f) {
    return a+b+c+d+e+f;
  
})
 console.log (add=([11, 12, 13, 14, 15, 16]));
