import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import { constants, functions } from '../../utils';

import styles from './Navbar.css';

const { handleKeyUp } = functions;
const profilePic = `${constants.imagesEndpoint}/host_7.jpg`;

const Navbar = (props) => {
  const goHome = () => {
    props.history.push('/');
  };
  return (
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
          src={profilePic}
          alt="profile pic"
          onClick={goHome}
          onKeyUp={e => handleKeyUp(e, goHome)}
          role="link"
          tabIndex="0"
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

module.exports = Navbar;
