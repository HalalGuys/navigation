import React from 'react';
import PropTypes from 'prop-types';

import { constants } from '../../utils';
import Input from '../Input/Input';

import styles from './Landing.css';

const backgroundImage = `${constants.imagesEndpoint}/landing.jpg`;

const Landing = (props) => {
  const { history } = props;
  return (
    <div
      id="Landing"
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.screen}>
        <div className={styles.title}>
          {'Find your Halal...'}
        </div>
        <Input history={history} />
      </div>
    </div>
  );
};

Landing.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

module.exports = Landing;
