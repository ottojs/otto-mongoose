
'use strict';

// Modules
require('should');

// Subject
var subject = require('../../lib/method.configure.js');

describe('.configure()', function () {

  it('should return a MongoDB string', function () {
    subject().should.be.type('string');
  });

});
