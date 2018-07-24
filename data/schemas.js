const searchListing = {
  listingId: { type: Number, unique: true },
  title: String,
  host: String,
  city: String,
  photo: String,
};

const searchRecord = {
  text: String,
  createdAt: Date,
};

module.exports = {
  searchListing,
  searchRecord,
};
