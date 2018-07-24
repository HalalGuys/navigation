import axios from 'axios';
import React from 'react';

import Landing from '../ListingSearch/Landing/Landing';
import Results from '../ListingSearch/Results/Results';
import Navbar from '../ListingSearch/Navbar/Navbar';

import { constants } from '../utils';

import './App.css';

const { apiEndpoints } = constants;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.saveFeedbackData = this.saveFeedbackData.bind(this);
    this.state = {
      searchQuery: {},
      searchRecords: [],
      searchResults: [],
    };
  }

  componentDidMount() {}

  postSearchRecord(searchQuery) {
    axios.post(apiEndpoints.postRecords, { searchQuery });
  }

  getSearchHistory() {
    axios
      .get(apiEndpoints.getRecords)
      .then(response => this.setState({ searchRecords: response.data }));
  }

  getSearchResults(searchQuery) {
    axios.get(`${apiEndpoints.getResults}/${searchQuery}`).then((response) => {
      this.setState({ searchResults: response.data });
    });
  }

  render() {
    <Landing />
    <Results />
    <Navbar />
  }
}
