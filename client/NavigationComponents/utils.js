const postRecordsEndpoint = 'http://localhost:3000/api/searchRecords';
const getRecordsEndpoint = 'http://localhost:3000/api/searchRecords';
const getResultsEndpoint = 'http://localhost:3000/api/searchListings';

const searchUrl = '/search';
const listingUrl = '/listing';

const imagesEndpoint = 'https://s3.amazonaws.com/fec-overview-service-images';

const handleKeyUp = (event, handler) => {
  if (event.key === 'Enter') {
    handler();
  }
};

module.exports = {
  constants: {
    postRecordsEndpoint,
    getRecordsEndpoint,
    getResultsEndpoint,
    searchUrl,
    listingUrl,
    imagesEndpoint,
  },
  functions: {
    handleKeyUp,
  },
};
