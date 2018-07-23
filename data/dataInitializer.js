const faker = require('faker');
const db = require('./index.js');

const imageEndpoint = 'https://s3.amazonaws.com/fec-overview-service-images';

const listingCount = 101;

const generateFakeSearchListing = function (id) {
  return {
    listingId: id,
    title: faker.random.words(),
    host: faker.name.findName(),
    city: faker.address.city(),
    photo: `${imageEndpoint}/host_${id % 5}.jpg`,
  };
};

const generateData = function () {
  const searchListings = [];
  for (let i = 0; i < listingCount; i++) {
    searchListings.push(generateFakeSearchListing(i));
  }
  return {
    SearchListing: searchListings,
  };
};

const initializeData = function () {
  const data = generateData();
  const processes = [];
  Object.keys(db).forEach((model) => {
    processes.push(
      db[model]
        .find({})
        .remove()
        .exec()
        .then(() => db[model].insertMany(data[model]))
        .catch((err) => {
          console.log(`Error initializing data for ${model}, ${err}`);
          process.exit(-1);
        }),
    );
  });
  Promise.all(processes).then(() => process.exit(0));
};

initializeData();
