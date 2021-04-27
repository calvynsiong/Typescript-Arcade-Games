"use strict";

function add(n1, n2, showResult, phrase) {
  var result = n1 + n2;

  if (!showResult) {
    return result;
  }

  console.log(phrase + result);
}

var number1 = 900009;
var number2 = 55;
add(number1, number2, true, "Result is ");