import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Results.css';

const apiEndpoints = {
  getRecords: '/api/searchRecords',
  getResults: '/api/searchListings',
  postRecords: '/api/searchRecords',
};

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  componentDidMount() {
    console.log(this.props.match);
    const {
      match: { params },
    } = this.props;
    this.getSearchResults(params.searchQuery);
  }

  getSearchResults(searchQuery) {
    axios.get(`${apiEndpoints.getResults}/${searchQuery}`).then((response) => {
      this.setState({ searchResults: response.data });
    });
  }

  render() {
    const { searchResults } = this.state;
    const {
      match: { params },
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.summary}>
          {`Results found for
          "${params.searchQuery}":
          ${searchResults.length}
          ${!searchResults.length ? '🙁' : ''}`}
        </div>
        <div className={styles.list}>
          {searchResults.map(searchResult => <Result searchResult={searchResult} />)}
        </div>
      </div>
    );
  }
}

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

Result.propTypes = {
  searchResult: PropTypes.shape({
    title: PropTypes.string,
    host: PropTypes.string,
    city: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};
