import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from '../ListingSearch/Landing/Landing';
import Results from '../ListingSearch/Results/Results';
import Navbar from '../ListingSearch/Navbar/Navbar';

import styles from './App.css';

const App = () => (
  <Router>
    <div className={styles.searchContainer}>
      <Route exact path="/" component={Landing} />
      <Route
        path="/search/:searchQuery"
        render={props => (
          <div>
            <Navbar {...props} />
            <Results {...props} />
          </div>
        )}
      />
      <Route path="/listing/:listingId" component={Navbar} />
    </div>
  </Router>
);

module.exports = App;
