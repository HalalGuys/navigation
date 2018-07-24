const express = require('express');
const parser = require('body-parser');

const model = require('./model');

const port = process.env.PORT || 3000;

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('/api/searchRecords', (req, res) => {
  model.getSearchRecords((err, results) => {
    res.statusCode = err ? 400 : 200;
    res.send(err || results);
  });
});

app.get('/api/searchListings/:searchQuery', (req, res) => {
  const { searchQuery } = req.params;
  model.getSearchResults(searchQuery, (err, results) => {
    res.statusCode = err ? 400 : 200;
    res.send(err || results);
  });
});

app.post('/api/searchRecords', (req, res) => {
  const { searchQuery } = req.body;
  model.postSearchRecord(searchQuery, (err, results) => {
    res.statusCode = err ? 400 : 200;
    res.send(err || results);
  });
});

app.use('/', express.static(`${__dirname}/../public`));
app.use('/search/:searchQuery', express.static(`${__dirname}/../public`));
app.use('/listing/:listingId', express.static(`${__dirname}/../public`));

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports = app;
