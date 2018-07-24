import axios from 'axios';
import React from 'react';

import Landing from '../ListingSearch/Landing/Landing';
import Results from '../ListingSearch/Results/Results';
import Navbar from '../ListingSearch/Navbar/Navbar';

// import { constants } from '../utils';

import './App.css';

const apiEndpoints = {
  getRecords: '/api/searchRecords',
  getResults: '/api/searchListings',
  postRecords: '/api/searchRecords',
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.postSearchRecord = this.postSearchRecord.bind(this);
    this.getSearchHistory = this.getSearchHistory.bind(this);
    this.state = {
      searchRecords: [],
      searchResults: [],
    };
  }

  componentDidMount() {
    this.getSearchHistory();
  }

  getSearchHistory() {
    axios
      .get(apiEndpoints.getRecords)
      .then(response => this.setState({ searchRecords: response.data }));
  }

  getSearchResults(searchQuery) {
    axios.get(`${apiEndpoints.getResults}/${searchQuery}`).then((response) => {
      this.setState({ searchResults: response.data }, () => {
        this.postSearchRecord(searchQuery);
      });
    });
  }

  postSearchRecord(searchQuery) {
    axios.post(apiEndpoints.postRecords, { searchQuery }).then(() => {
      this.getSearchHistory();
    });
  }

  render() {
    return <Landing getSearchResults={this.getSearchResults} />;
    // <Navbar />
    // <Results />
  }
}
