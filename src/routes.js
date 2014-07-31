/* jshint node:true */
"use strict";

var Backbone = require('backbone');
var HomeView = require('./views/home');

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'new': 'new',
    'open': 'open'
  },

  initialize: function(){
    var homeView = new HomeView();
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
