import React from 'react';
import PropTypes from 'prop-types';
import { constants } from '../../utils';
import Input from '../Input/Input';

import styles from './Landing.css';

const backgroundImage = `${constants.imagesEndpoint}/landing.jpg`;

const Landing = props => (
  <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className={styles.screen}>
      <div className={styles.title}>
Find your Halal...
      </div>
      <Input {...props} />
    </div>
  </div>
);

Input.propTypes = {
  getSearchResults: PropTypes.func.isRequired,
};

module.exports = Landing;
