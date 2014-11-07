'use strict';

var Backbone = require('backbone');
Backbone.LocalStorage = require('backbone.localstorage');
var Model = require('../models/document');

var Documents = Backbone.Collection.extend({
  model: Model,
  localStorage: new Backbone.LocalStorage('documents')
});

module.exports = Documents;
