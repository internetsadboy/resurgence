'use strict';

const repeatedString = require('./rs');
const assert = require('assert');


describe('repeated-string test suite', () => {
  it('should count 2 a\'s', () => {
    assert.strictEqual(repeatedString('ababa', 4), 2);
  });

  it('should count 4 a\'s', () => {
    assert.strictEqual(repeatedString('abcac', 10), 4);
  })

  it('should count 6 a\'s', () => {
    assert.strictEqual(repeatedString('abad', 11), 6);
  });

  it('should count 7 a\'s', () => {
    assert.strictEqual(repeatedString('aba', 10), 7);
  });

  it('should count 1000000000000 a\'s', () => {
    assert.strictEqual(repeatedString('a', 1000000000000), 1000000000000);
  });
});
