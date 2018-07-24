import React from 'react';
import PropTypes from 'prop-types';

import styles from './Results.css';

const Results = (props) => {
  const { searchQuery, searchResults } = props;
  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        {`Results found for
        "${searchQuery}":
         ${searchResults.length}
         ${!searchResults.length ? '🙁' : ''}`}
      </div>
      <div className={styles.list}>
        {searchResults.map(searchResult => <Result searchResult={searchResult} />)}
      </div>
    </div>
  );
};

const Result = (props) => {
  const {
    title, host, city, photo,
  } = props.searchResult;
  return (
    <div className={styles.result}>
      <div className={styles.details}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.city}>
          {city}
        </div>
        <div className={styles.host}>
          {`Hosted by ${host}`}
        </div>
      </div>
      <img className={styles.photo} src={photo} alt={title} />
    </div>
  );
};

Results.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      host: PropTypes.string,
      city: PropTypes.string,
      photo: PropTypes.string,
    }),
  ).isRequired,
};

Result.propTypes = {
  searchResult: PropTypes.shape({
    title: PropTypes.string,
    host: PropTypes.string,
    city: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

module.exports = Results;
