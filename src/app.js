/* jshint node:true */
"use strict";

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Router = require('./routes.js');

//ToDo: gulp task for stylus
$(function(){

  new Router();
  Backbone.history.start();

});
