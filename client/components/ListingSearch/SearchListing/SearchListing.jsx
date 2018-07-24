import React from 'react';
import Navbar from '../Navbar/Navbar';
import Results from '../Results/Results';

const SearchListing = props => (
  <div>
    <Navbar />
    <Results {...props} />
  </div>
);

module.exports = SearchListing;
