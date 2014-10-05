'use strict';

var Backbone = require('backbone');
var Model = require('../models/document');
var PouchDB = require('pouchdb');
var BackbonePouch = require('backbone-pouch');
var _ = require('underscore');

var Documents = Backbone.Collection.extend({
  model: Model,
  sync: BackbonePouch.sync({
    db: new PouchDB('docs'),
    fetch: 'query',
    options: {
      query: {
        include_docs: true,
        fun: {
          /* jshint ignore:start */
          // Since it's a scope thing, this isn't undefined;
          // However, jshint still hates it, and rightfully so.
          // So, I'll just ignore it for now :)
          map: function(doc){
            emit(doc.position, null);
          }
          /* jshint ignore:end */
        },
        limit: 10
      }
    },
    parse: function(result) {
      return _.pluck(result.rows, 'doc');
    }
  })
});

module.exports = Documents;
