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
  onrender: function(){
    this.on({
      open: this.open,
      save: this.save
    });
  },
  open: function(){
    console.log('opening file');
  },
  save: function(event){
    // console.log(event);
    // Not working, needs isolation
    // this.getdoc.save();
    event.context.documents.add(event.context.doc);
    event.context.doc.save();
    // console.log(this.get('documents'));
    // this.get('documents').sync();

  }
});

module.exports = Home;
