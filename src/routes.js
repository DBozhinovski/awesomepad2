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
    'show/:id': 'show'
  },

  initialize: function(){
    this.homeView = new HomeView();
    this.documents = new Documents();
    this.documents.fetch();
    this.homeView.set({documents: this.documents});
  },

  home: function(){
    this.homeView.set('route', 'browse');
  },

  new: function(){
    this.homeView.set({route: 'edit', doc: new Document()});
  },

  open: function(){
    this.homeView.set('route', 'open');
  },
  show: function(id){
    // Should render the doc
    this.homeView.set({route: 'show', doc: this.documents.get(id)});
    console.log(id);
  }
});

module.exports = new Router();
