/* jshint node:true, eqeqeq:true */
"use strict";

var Ractive = require('ractive');
var fs = require('fs');

var template = fs.readFileSync(__dirname + '/templates/index.ractive');
var editor = fs.readFileSync(__dirname + '/templates/partials/editor.ractive');

var Home = Ractive.extend({
  el: 'body',
  template: (template.toString()),
  partials: {
    editor: (editor.toString())
  }
});

module.exports = Home;