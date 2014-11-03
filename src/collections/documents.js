'use strict';

var Backbone = require('backbone');
var Model = require('../models/document');

var Documents = Backbone.Collection.extend({
  model: Model
});

module.exports = Documents;
