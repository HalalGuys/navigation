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
      <img
        src="https://s3.amazonaws.com/fec-overview-service-images/confused_avatar.png"
        alt="profile pic"
      />
    </div>
  </div>
);

module.exports = Navbar;
