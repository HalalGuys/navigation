import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

import styles from './Navbar.css';

const Navbar = props => (
  <div className={styles.navbar}>
    <Input {...props} />
    <div className={styles.menu}>
      <span>
Become a host
      </span>
      <span>
Saved
      </span>
      <span>
Trips
      </span>
      <span>
Messages
      </span>
    </div>
  </div>
);

module.exports = Navbar;
