/* jshint node:true, eqeqeq:true */
"use strict";

var Ractive = require('ractive');
require('ractive-adaptors-backbone');

var fs = require('fs');

var template = fs.readFileSync(__dirname + '/templates/index.ractive');
var editor = fs.readFileSync(__dirname + '/templates/partials/editor.ractive');
var browse = fs.readFileSync(__dirname + '/templates/partials/browse.ractive');

// Needs backbone adaptor

var Home = Ractive.extend({
  el: 'body',
  template: (template.toString()),
  adapt: ['Backbone'],
  partials: {
    editor: (editor.toString()),
    browse: (browse.toString())
  },
  init: function(){
    this.on('open', this.open);
    this.on('save', this.save);
  },
  open: function(){
    console.log('opening file');
  },
  save: function(){
    console.log(this.data);
  }
});

module.exports = Home;
