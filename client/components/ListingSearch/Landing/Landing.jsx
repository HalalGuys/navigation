import React from 'react';
import { constants } from '../../utils';
import Input from '../Input/Input';

import styles from './Landing.css';

const backgroundImage = `${constants.imagesEndpoint}/landing.jpg`;

const Landing = props => (
  <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className={styles.screen}>
      <div className={styles.title}>
        {'Find your Halal...'}
      </div>
      <Input {...props} />
    </div>
  </div>
);

module.exports = Landing;
