import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { constants, functions } from '../../utils';

import styles from './Results.css';

const { getResultsEndpoint, listingUrl } = constants;
const { handleKeyUp } = functions;

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  componentDidMount() {
    this.getSearchResults(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getSearchResults(nextProps);
  }

  getSearchResults(props) {
    const {
      match: { params },
    } = props;
    axios.get(`${getResultsEndpoint}/${params.searchQuery}`).then((response) => {
      this.setState({ searchResults: response.data });
    });
  }

  render() {
    const {
      match: { params },
    } = this.props;
    const { searchResults } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.summary}>
          {`Results found for
          "${params.searchQuery}":
          ${searchResults.length}
          ${!searchResults.length ? '🙁' : ''}`}
        </div>
        <div className={styles.list}>
          {searchResults.map((searchResult, index) => (
            <Result key={`result_${index}`} {...this.props} searchResult={searchResult} />
          ))}
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      searchQuery: PropTypes.string,
    }),
  }).isRequired,
};

const Result = (props) => {
  const {
    searchResult: {
      listingId, title, host, city, photo,
    },
  } = props;
  const goToListing = () => {
    props.history.push(`${listingUrl}/${listingId}`);
  };
  return (
    <div className={styles.result}>
      <div className={styles.details}>
        <div
          className={styles.title}
          onClick={goToListing}
          onKeyUp={e => handleKeyUp(e, goToListing)}
          role="link"
          tabIndex="0"
        >
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
    listingId: PropTypes.number,
    title: PropTypes.string,
    host: PropTypes.string,
    city: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
