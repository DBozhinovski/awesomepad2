'use strict';

var Backbone = require('backbone');
Backbone.LocalStorage = require('backbone.localstorage');

var Document = Backbone.Model.extend({
  localStorage: new Backbone.LocalStorage('documents')

});

module.exports = Document;
