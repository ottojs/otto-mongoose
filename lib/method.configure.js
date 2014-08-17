
'use strict';

var defaults = {
  hostname : 'localhost',
  database : 'test',
  port     : 27017
};

module.exports = function (options) {

  if (!options)          { options = {}; }
  if (!options.hostname) { options.hostname = defaults.hostname; }
  if (!options.database) { options.database = defaults.database; }
  if (!options.port)     { options.port     = defaults.port; }

  return 'mongodb://' + options.hostname + ':' + options.port + '/' + options.database;

};
