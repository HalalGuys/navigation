import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './Components/Landing/Landing';
import Results from './Components/Results/Results';
import Navbar from './Components/Navbar/Navbar';

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
          </div>
        )}
      />
    </div>
  </Router>
);

module.exports = App;
