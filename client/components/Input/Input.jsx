import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import History from '../History/History';
import { constants } from '../utils';

import styles from './Input.css';

const { postRecordsEndpoint, getRecordsEndpoint, searchUrl } = constants;

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchRecords = this.getSearchRecords.bind(this);
    this.postSearchRecord = this.postSearchRecord.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.executeSearch = this.executeSearch.bind(this);
    this.clearSearchQuery = this.clearSearchQuery.bind(this);
    this.state = {
      searchQuery: '',
      searchRecords: [],
      inputField: null,
    };
  }

  componentDidMount() {
    this.getSearchRecords();
  }

  getSearchRecords() {
    axios.get(getRecordsEndpoint).then((response) => {
      this.setState({ searchRecords: response.data });
    });
  }

  setSearchQuery(searchQuery) {
    this.setState({ searchQuery }, this.executeSearch);
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.executeSearch();
    }
  }

  handleChange(event) {
    const { target } = event;
    this.setState({ inputField: target, searchQuery: target.value });
  }

  postSearchRecord() {
    axios.post(postRecordsEndpoint, { searchQuery: this.state.searchQuery }).then(() => {
      this.getSearchRecords();
    });
  }

  executeSearch() {
    this.postSearchRecord();
    this.clearSearchQuery();
    this.props.history.push(`${searchUrl}/${this.state.searchQuery}`);
  }

  clearSearchQuery() {
    if (this.state.inputField) {
      this.setState({ searchQuery: '' }, () => {
        this.state.inputField.value = '';
        this.state.inputField.focus();
      });
    }
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.bar}>
          <span className={styles.icon} role="img" aria-label="search">
            🔎
          </span>
          <input
            className={styles.field}
            value={searchQuery}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            tabIndex="0"
            placeholder="Anywhere"
            maxLength={30}
            autoFocus
          />
          <span
            className={`${styles.cancel} ${searchQuery ? styles.active : ''}`}
            onClick={() => {
              if (searchQuery) {
                this.clearSearchQuery();
              }
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter' && searchQuery) {
                this.clearSearchQuery();
              }
            }}
            role="button"
            tabIndex="0"
          >
            &times;
          </span>
        </div>
        {searchQuery && <History {...this.state} handleClick={this.setSearchQuery} />}
      </div>
    );
  }
}

Input.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
