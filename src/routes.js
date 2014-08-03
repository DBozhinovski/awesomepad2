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
    this.homeView = new HomeView();
  },

  home: function(){
    console.log('home');
    this.homeView.set({browse: true, edit: false, open: false});
  },

  new: function(){
    console.log('new');
    this.homeView.set({browse: false, edit: true, open: false});
  },

  open: function(){
    console.log('open');
    this.homeView.set({browse: false, edit: false, open: true});
  }
});

module.exports = Router;
