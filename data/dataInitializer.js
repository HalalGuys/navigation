require('dotenv').config()
const faker = require('faker');
const db = require('./index.js');
const pg = require('pg');
const format = require('pg-format');


const config = {
  user: process.env.DB_USER, // name of the user account
  database: process.env.DB_DATABASE, // name of the database
}

const pool = new pg.Pool(config);
let myClient;

const imageEndpoint = 'https://s3.amazonaws.com/fec-overview-service-images';

const insertData = () => {
  for (let i = 0; i < 5000; i++) {
    pool.connect((err, client) => {
      myClient = client;
      const insertQuery = format(`INSERT INTO searchListing (title, host, city, photoURL) 
      VALUES ('${faker.random.words()}', '${faker.name.findName()}', '${faker.address.city()}', '${imageEndpoint}/home_${i % 5}.jpg');`)
      myClient.query(insertQuery, (err, result) => {
        if (err) console.log(err);
        console.log(result)
      })
    })
  }
}
insertData();

const updateData = (id, cb) => {
  pool.connect((err, client) => {
    myClient = client;

  })
}


// const listingCount = 101;

// const generateFakeSearchListing = function (id) {
//   return {
//     listingId: id,
//     title: faker.random.words(),
//     host: faker.name.findName(),
//     city: faker.address.city(),
//     photo: `${imageEndpoint}/home_${id % 5}.jpg`,
//   };
// };

// const generateData = function () {
//   const searchListings = [];
//   for (let i = 0; i < listingCount; i++) {
//     searchListings.push(generateFakeSearchListing(i));
//   }
//   return {
//     SearchListing: searchListings,
//   };
// };

// const initializeData = function () {
//   const data = generateData();
//   const processes = [];
//   Object.keys(db).forEach((model) => {
//     processes.push(
//       db[model]
//         .find({})
//         .remove()
//         .exec()
//         .then(() => db[model].insertMany(data[model]))
//         .catch((err) => {
//           console.log(`Error initializing data for ${model}, ${err}`);
//           process.exit(-1);
//         })
//     );
//   });
//   Promise.all(processes).then(() => process.exit(0));
// };

// initializeData();
