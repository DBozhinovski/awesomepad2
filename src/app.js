/* jshint node:true */
"use strict";

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Router = require('./routes.js');


// domready instead of jquery, maybe lose backbone as well?
$(function(){

  new Router();
  Backbone.history.start();

});
