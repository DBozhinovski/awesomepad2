'use strict';

var Backbone = require('backbone');
var Model = require('../models/document');

// Needs pouchdb

var Documents = Backbone.Collection.extend({
  model: Model
});

module.exports = Documents;
