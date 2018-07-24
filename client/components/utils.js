const apiEndpoints = {
  postRecords: '/api/searchRecords',
  getRecords: '/api/searchRecords',
  getResults: '/api/searchListings',
};
const imagesEndpoint = 'https://s3.amazonaws.com/fec-overview-service-images';

const processKeyUp = (e, handler) => {
  e.key === 'Enter' && handler();
};

module.exports = {
  constants: {
    apiEndpoints,
  },
  functions: {
    processKeyUp,
  },
};
