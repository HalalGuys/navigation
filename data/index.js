const mongoose = require('mongoose');
const schemas = require('./schemas.js');

mongoose.connect('mongodb://localhost/airbnh');

const searchListingSchema = mongoose.Schema(schemas.searchListing);
const searchRecordSchema = mongoose.Schema(schemas.searchRecord);

const SearchListing = mongoose.model('SearchListing', searchListingSchema);
const SearchRecord = mongoose.model('SearchRecord', searchRecordSchema);

module.exports = {
  SearchListing,
  SearchRecord,
};
