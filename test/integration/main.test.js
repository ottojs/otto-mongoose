
'use strict';

// Modules
require('should');

// Subject
var subject = require('../../lib/index.js');

describe('Module', function () {

  it('should be a function', function () {
    subject.should.be.type('function');
  });

});
