import React from 'react';
import { constants } from '../../utils';
import Input from '../Input/Input';

import styles from './Navbar.css';

const profilePic = `${constants.imagesEndpoint}/host_3.jpg`;

const Navbar = props => (
  <div className={styles.navbar}>
    <Input {...props} />
    <div className={styles.menu}>
      <span>
        {'Become a host'}
      </span>
      <span>
        {'Saved'}
      </span>
      <span>
        {'Trips'}
      </span>
      <span>
        {'Messages'}
      </span>
      <img src={profilePic} alt="profile pic" />
    </div>
  </div>
);

module.exports = Navbar;
