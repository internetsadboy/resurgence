'use strict';

const ASCII_ZERO_VAL = '0'.charCodeAt(0);

function addStrings (num1, num2) {
  let sum = 0;
  sum = stringToInt(num1) + stringToInt(num2);
  return sum < 5100 ? sum : 'sum out of bounds';;
}

function stringToInt (n) {
  let str = n; // leave n unmutated
  let sum = 0;
  let k = 0;
  let e = n.length - 1; // exponent for base 10 computation

  // convert each respective base 10 value to its int equivalent, then summate
  while (k < n.length) {
    let current = str[k].charCodeAt(0) - ASCII_ZERO_VAL; // '1'.charCodeAt(0) => 49 - 48 => 1
    current *= Math.pow(10, e--); // 1 * 10^2 => 1 * 100
    sum += current;
    k++;
  }
  return sum;
}

module.exports = addStrings;
