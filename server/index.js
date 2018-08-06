const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const model = require('./model');

const port = process.env.PORT || 2999;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/searchRecords', (req, res) => {
  model.getSearchRecords((err, results) => {
    if (err) console.log(err);
    res.statusCode = err ? 400 : 200;
    res.send(err || results);
  });
});

app.get('/api/searchListings/:searchQuery', (req, res) => {
  const { searchQuery } = req.params;
  model.getSearchResults(searchQuery, (err, results) => {
    if (err) console.log(err);
    res.statusCode = err ? 400 : 200;
    res.send(err || results);
  });
});

app.post('/api/searchRecords', (req, res) => {
  const { searchQuery } = req.body;
  res.header('Access-Control-Allow-Origin', '*');
  model.postSearchRecord(searchQuery, (err, results) => {
    if (err) console.log(err);
    res.statusCode = err ? 400 : 200;
    res.send(err || results);
  });
});

app.use('/*', express.static(`${__dirname}/../public`));

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports = app;
