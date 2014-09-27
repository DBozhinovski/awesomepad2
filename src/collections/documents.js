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
          map: function(doc) {
            if (doc.type === 'document') {
              console.log(doc);
              // emit(doc.position, null);
              return doc;
            }
          }
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
