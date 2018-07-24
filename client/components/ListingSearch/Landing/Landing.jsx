import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import styles from './Landing.css';

const Landing = props => (
  <div>
    <Input {...props} />
  </div>
);

Landing.propTypes = {
  getSearchResults: PropTypes.func.isRequired,
};

module.exports = Landing;
