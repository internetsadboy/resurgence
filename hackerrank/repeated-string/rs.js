'use strict';

export default function repeatedString(s, n) {
  let count = 0;
  let aCountRemainder = 0;
  let remainder = n % s.length;

  for (let i = s.length; i-- > 0;) {
    if (s.charAt(i) == 'a') {
      count++;

      if (i < remainder) aCountRemainder++;
    }
  }

  return ((n - remainder) / s.length * count) + aCountRemainder
}

module.exports = repeatedString;
