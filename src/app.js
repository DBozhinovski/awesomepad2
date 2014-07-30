/* jshint node:true */
"use strict";

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Router = require('./routes.js');

$(function(){

  // Routes here
  new Router();
  Backbone.history.start();

});
