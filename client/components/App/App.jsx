import axios from 'axios';
import React from 'react';

import Landing from '../ListingSearch/Landing/Landing';
import Results from '../ListingSearch/Results/Results';
import Navbar from '../ListingSearch/Navbar/Navbar';

// import { constants } from '../utils';

import './App.css';

const apiEndpoints = {
  postRecords: '/api/searchRecords',
  getRecords: '/api/searchRecords',
  getResults: '/api/searchListings',
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.postSearchRecord = this.postSearchRecord.bind(this);
    this.getSearchHistory = this.getSearchHistory.bind(this);
    this.state = {
      searchQuery: {},
      searchRecords: [],
      searchResults: [],
    };
  }

  componentDidMount() {}

  getSearchResults(searchQuery) {
    axios.get(`${apiEndpoints.getResults}/${searchQuery}`).then((response) => {
      console.log(response);
      this.setState({ searchResults: response.data }, () => this.postSearchRecord(searchQuery));
    });
  }

  postSearchRecord(searchQuery) {
    axios.post(apiEndpoints.postRecords, { searchQuery });
  }

  getSearchHistory() {
    axios
      .get(apiEndpoints.getRecords)
      .then(response => this.setState({ searchRecords: response.data }));
  }

  render() {
    return <Landing getSearchResults={this.getSearchResults} />;
    // <Results />
    // <Navbar />
  }
}
