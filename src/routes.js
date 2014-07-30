/* jshint node:true */
"use strict";

var Backbone = require('backbone');

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'new': 'new',
    'open': 'open'
  },

  home: function(){
    console.log('home');
  },

  new: function(){
    console.log('new');
  },

  open: function(){
    console.log('open');
  }
});

module.exports = Router;
