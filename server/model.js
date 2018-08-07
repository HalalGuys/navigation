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

const faker = require('faker');
const db = require('./index.js');
const pg = require('pg');
const format = require('pg-format');
const PGUSER = 'chris';
const PGDATABASE = 'listings';
const age = 732;

const config = {
  user: PGUSER, // name of the user account
  database: PGDATABASE, // name of the database
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


const updateData = (id, cb) => {
  pool.connect((err, client) => {
    myClient = client;

  })
}

module.exports = {
  getSearchResults,
  getSearchRecords,
  postSearchRecord,
};
