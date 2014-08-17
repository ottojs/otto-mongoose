
'use strict';

// Modules
var mongoose  = require('mongoose');
var configure = require('./method.configure.js');

// Export
module.exports = function (options) {

  if (!options.debug) { options.debug = false; }

  // Connect
  mongoose.connect(configure(options));
  mongoose.set('debug', options.debug);

  return mongoose;

};
