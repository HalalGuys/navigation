const request = require('supertest');
const app = require('../server');

const agent = request(app);

const successfulSearchQuery = 'a';
const unsuccessfulSearchQuery = 'aaaaaaaaaa';

const successfulSearchUrl = `/api/searchListings/${successfulSearchQuery}`;
const unsuccessfulSearchUrl = `/api/searchListings/${unsuccessfulSearchQuery}`;
const postSearchRecordUrl = '/api/searchRecords';
const getSearchRecordsUrl = '/api/searchRecords';

describe('GET search results', () => {
  test(`It should find searchListing objects that contain "${successfulSearchQuery}"`, (done) => {
    agent.get(successfulSearchUrl).then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      const firstResult = response.body[0];
      expect(firstResult).toHaveProperty('title');
      expect(firstResult).toHaveProperty('city');
      const foundSearchQuery = firstResult.title.indexOf(successfulSearchQuery) >= 0
        || firstResult.city.indexOf(successfulSearchQuery) >= 0;
      expect(foundSearchQuery).toBe(true);
      done();
    });
  });

  test(`It should NOT find any searchListing objects that contain "${unsuccessfulSearchQuery}"`, (done) => {
    agent.get(unsuccessfulSearchUrl).then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([]);
      done();
    });
  });
});

describe('PUT searchQuery', () => {
  const searchQuery = { searchQuery: successfulSearchQuery };
  test('It should return status 200 when posting a valid searchQuery', (done) => {
    agent
      .post(postSearchRecordUrl)
      .send(searchQuery)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('GET searchQuery', () => {
  test('It should return most recent searches first', (done) => {
    agent.get(getSearchRecordsUrl).then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      const firstResult = response.body[0];
      const secondResult = response.body[1];
      expect(Date.parse(firstResult.createdAt)).toBeGreaterThan(Date.parse(secondResult.createdAt));
      done();
    });
  });
});

describe('POST and GET searchQuery', () => {
  const searchQuery = { searchQuery: unsuccessfulSearchQuery };
  test('It should return a searchQuery object once it has been posted', (done) => {
    agent
      .post(postSearchRecordUrl)
      .send(searchQuery)
      .end(() => {
        agent.get(getSearchRecordsUrl).then((response) => {
          expect(response.body[0].text).toBe(searchQuery.searchQuery);
          done();
        });
      });
  });
});
