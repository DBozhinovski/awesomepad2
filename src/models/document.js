'use strict';

var Backbone = require('backbone');
var PouchDB = require('pouchdb');
var BackbonePouch = require('backbone-pouch');

var Document = Backbone.Model.extend({
  idAttribute: '_id',
  sync: BackbonePouch.sync({
    db: new PouchDB('docs'),
  })
});

module.exports = Document;
