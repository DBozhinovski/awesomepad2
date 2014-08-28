'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

$(function(){

  require('./routes.js');
  Backbone.history.start();

});
