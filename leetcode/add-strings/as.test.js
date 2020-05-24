'use strict';

const addStrings = require('./as');
const assert = require('assert');

describe('addStrings', () => {
  it('should add 1 + 2', () => {
    assert.strictEqual(addStrings('1', '2'), 3);
  });

  it('should add 13 + 24', () => {
    assert.strictEqual(addStrings('13', '24'), 37);
  });

  it('should add 1823 + 234', () => {
    assert.strictEqual(addStrings('1823', '234'), 2057);
  });

  it('should return out of bounds for 5000 + 100', () => {
    assert.strictEqual(addStrings('5000', '100'), 'sum out of bounds');
  });
});
