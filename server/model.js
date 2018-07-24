const models = require('../data');

const getSearchResults = function (searchQuery, callback) {
  models.SearchListing.find({
    $or: [{ title: { $regex: searchQuery } }, { city: { $regex: searchQuery } }],
  })
    .then((results) => {
      callback(null, results);
    })
    .catch((err) => {
      callback(err);
    });
};

const getSearchRecords = function (callback) {
  models.SearchRecord.find({})
    .sort('-createdAt')
    .exec(callback);
};

const postSearchRecord = function (searchQuery, callback) {
  const searchRecord = new models.SearchRecord({ text: searchQuery, createdAt: new Date() });
  searchRecord
    .save()
    .then(results => callback(null, results))
    .catch(err => callback(err));
};

module.exports = {
  getSearchResults,
  getSearchRecords,
  postSearchRecord,
};
