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

const updateSearchListing = (id, cb) => {
  models.SearchListing.findByIdAndUpdate(id, req.body,
    // an option that asks mongoose to return the updated version 
    // of the document instead of the pre-updated one.
    {new: true},
    (err, result) => {
        if (err) console.log(err);
        return cb(null, result);
    }
  )
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
// const searchListing = {
//   listingId: { type: Number, unique: true },
//   title: String,
//   host: String,
//   city: String,
//   photo: String,
// };

module.exports = {
  getSearchResults,
  getSearchRecords,
  postSearchRecord,
  updateSearchListing,
  deleteSearchListing,
};
