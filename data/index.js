const mongoose = require('mongoose');
const schemas = require('./schemas.js');

const URI = `mongodb://${process.env.DB || 'localhost'}:27017/airbnh`;
mongoose.connect(URI, { useNewUrlParser: true }).catch(err => console.log(err));

const searchListingSchema = mongoose.Schema(schemas.searchListing);
const searchRecordSchema = mongoose.Schema(schemas.searchRecord);

const SearchListing = mongoose.model('SearchListing', searchListingSchema);
const SearchRecord = mongoose.model('SearchRecord', searchRecordSchema);

module.exports = {
  SearchListing,
  SearchRecord,
};
