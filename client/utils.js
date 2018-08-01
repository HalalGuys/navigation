const apiDomain = window.location.href.includes('localhost')
  ? 'http://localhost:2999'
  : 'http://ec2-34-217-69-244.us-west-2.compute.amazonaws.com';

const postRecordsEndpoint = `${apiDomain}/api/searchRecords`;
const getRecordsEndpoint = `${apiDomain}/api/searchRecords`;
const getResultsEndpoint = `${apiDomain}/api/searchListings`;

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
