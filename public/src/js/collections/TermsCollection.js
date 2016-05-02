var Backbone = require('backbone');
var TermModel = require('../models/TermModel');

module.exports = Backbone.Collection.extend({
  url: 'api/terms',
  model: TermModel
});
