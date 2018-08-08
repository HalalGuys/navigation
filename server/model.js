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

const updateSearchListing = (id, data, cb) => {
  models.SearchListing.findByIdAndUpdate(id, data, {new: true}, (err, result) => {
    if (err) console.log(err);
    return cb(null, result);
  })
}

const deleteSearchListing = (id, cb) => {
  models.SearchListing.findByIdAndRemove(id, (err, results) => {  
    if (err) console.log(err);

    const response = {
        message: "Successfully deleted",
        id: id
    };
    return cb(null, response)
  });
}


module.exports = {
  getSearchResults,
  getSearchRecords,
  postSearchRecord,
  updateSearchListing,
  deleteSearchListing,
};
