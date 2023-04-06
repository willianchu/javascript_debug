const { expect } = require('chai');
const { describe, it } = require('mocha');
const add = require('./add');

describe('add', function() {
  it('returns the sum of two numbers', function() {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
});
