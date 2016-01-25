var expect = require('chai').expect;

describe('template strings', function () {
  it('should be just a string', function() {
    var string = `abc`;

    expect(string).to.be.a('string');
  })
});
