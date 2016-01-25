var expect = require('chai').expect;

describe('template strings', function () {
  it('should be just a string', function() {
    var string = `abc`;

    expect(string).to.be.a('string');
  });

  it('can evaulate variables', function() {
    var bar = 'baz';
    var string = `foo${bar}`;

    expect(string).to.equal('foobaz');
  });

  it('can execute functions', function() {
    var string = `The date is: ${new Date()}`
    var date = new Date();

    expect(string).to.equal('The date is: '+date);
  });

  it('can do math?', function () {
    var string = `${1+1}`;

    expect(string).to.equal('2');
  });

  it('can do multiline strings', function() {
    var string = `hello
 world`;

    expect(string).to.equal('hello\n world');
  });
});
