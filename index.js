/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'add-test',

  blueprintsPath: function () {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    // This line actually imports the remarkable library
    this.app.import(app.bowerDirectory + '/remarkable/dist/remarkable.js');

    // This is a shim that allows us to do ``import Remarkable from 'remarkable'``
    this.app.import('vendor/add-test/shim.js', {
      type: 'vendor',
      exports: { 'remarkable': ['default'] }
    });
  }
};
