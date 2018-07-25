import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './NavigationComponents/Landing/Landing';
import Results from './NavigationComponents/Results/Results';
import Navbar from './NavigationComponents/Navbar/Navbar';
import Details from './ListingComponents/Details/client/components/App';

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
      <Route
        path="/listing/:listingId"
        render={props => (
          <div>
            <Navbar {...props} />
            <Details {...props} />
          </div>
        )}
      />
    </div>
  </Router>
);

module.exports = App;
