"use strict";
var expect = require('chai').expect;

describe('use let for block structure', function () {

  it('let only allows a variable to have meaning in that one block', function () {
    let x = 'testing';
    const y = 'unchanging';
    console.log(y);
    expect(x).to.equal('testing');
    if (x) {
      let x = 'now what';
      expect(x).to.equal('now what');
    console.log(y);
    }
    expect(x).to.equal('testing');
  });

  it('the {} can be used to create blocks by themselves', function () {
    let test = 'defined up here';
    expect(test).to.equal('defined up here');
    {
      let test = 'same name, different variable';
      expect(test).to.equal('same name, different variable');
    }
    expect(test).to.equal('defined up here');
  });
});


describe('destructuring is a handy? way of assigning values from objects or arrays', function () {

  it('Should allow me to use the values in an array and assign them to different variables', function () {
    var test = ["Isn't", "this", "grand?"];
    var [first, second, third] = test;
    //console.log(first);
    //console.log(second);
    //console.log(third);

    expect(first).to.be.equal("Isn't");
    expect(second).to.be.equal("this");
    expect(third).to.be.equal("grand?");
  });

  it('should assign object values to new variables', function () {
    var test = {foo: "yarp", bar: 0};
    var {foo, bar} = test;

    //console.log(foo);
    //console.log(bar);
    expect(foo).to.be.equal("yarp");
    expect(bar).to.be.equal(0);

  });
});
