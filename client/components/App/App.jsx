import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from '../ListingSearch/Landing/Landing';
import Results from '../ListingSearch/Results/Results';
import Navbar from '../ListingSearch/Navbar/Navbar';
import SearchResults from '../ListingSearch/SearchResults/SearchResults';

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
      searchQuery: '',
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
      this.setState({ searchQuery, searchResults: response.data }, () => {
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
    const { searchQuery, searchRecords, searchResults } = this.state;
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Landing {...this.state} />} />
          <Route path="/search/:searchQuery" component={SearchResults} />
        </div>
      </Router>
      // <Landing searchHistory={searchHistory} getSearchResults={this.getSearchResults} />;
      // <Navbar />
    );
  }
}
