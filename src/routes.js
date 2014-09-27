'use strict';

var Backbone = require('backbone');
var HomeView = require('./views/home');
var Document = require('./models/document');
var Documents = require('./collections/documents');
global.Documents = Documents;

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
    this.homeView.set({browse: true, edit: false, open: false});
  },

  new: function(){
    this.homeView.set({browse: false, edit: true, open: false, doc: new Document() });
  },

  open: function(){
    this.homeView.set({browse: false, edit: false, open: true});
  }
});

module.exports = new Router();
