import React from 'react';
import Navbar from '../Navbar/Navbar';
import Results from '../Results/Results';

const SearchResults = (props) => {
  const match = { params: { searchQuery: 'a' } };
  return (
    <div>
      <Navbar />
      <Results match={match} />
    </div>
  );
};

module.exports = SearchResults;
