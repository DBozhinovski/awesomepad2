'use strict';

var Ractive = require('ractive');
require('ractive-adaptors-backbone');

var fs = require('fs');

var template = fs.readFileSync(__dirname + '/templates/index.ractive');
var editor = fs.readFileSync(__dirname + '/templates/partials/editor.ractive');
var browse = fs.readFileSync(__dirname + '/templates/partials/browse.ractive');

var Home = Ractive.extend({
  el: 'body',
  template: (template.toString()),
  adapt: ['Backbone'],
  partials: {
    editor: (editor.toString()),
    browse: (browse.toString())
  },
  init: function(){
    this.on({
      open: this.open,
      save: this.open
    });
  },
  open: function(){
    console.log('opening file');
  },
  save: function(){
    // Not working, needs isolation
    // this.data.doc.save();
  }
});

module.exports = Home;
