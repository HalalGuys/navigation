const searchListing = {
  listingId: { type: Number, unique: true },
  title: String,
  host: String,
  city: String,
  photo: String,
};

const searchRecord = {
  text: String,
  time: Date,
};

module.exports = {
  searchListing,
  searchRecord,
};
