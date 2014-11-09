'use strict';

var Ractive = require('ractive');
require('ractive-adaptors-backbone');

var fs = require('fs');

var template = fs.readFileSync(__dirname + '/templates/index.ractive');
var editor = fs.readFileSync(__dirname + '/templates/partials/editor.ractive');
var browse = fs.readFileSync(__dirname + '/templates/partials/browse.ractive');

var _ = require('underscore');

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

    this.observe('route', function(route){
      // feels a bit hackish, but beats manual setting anyday
      if(route){
        var routes = {};
        routes[route] = true;
        this.set('routes', routes);
      }
    });
  },
  save: function(event){
    event.context.documents.add(event.context.doc);
    event.context.doc.save();
  }
});

module.exports = Home;
