import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { constants } from '../../utils';

import styles from './Input.css';

const { apiEndpoints } = constants;

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchRecords = this.getSearchRecords.bind(this);
    this.postSearchRecord = this.postSearchRecord.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.clearSearchQuery = this.clearSearchQuery.bind(this);
    this.state = {
      searchQuery: '',
      searchRecords: [],
      inputField: null,
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.getSearchRecords();
  }

  getSearchRecords() {
    axios
      .get(apiEndpoints.getRecords)
      .then(response => this.setState({ searchRecords: response.data }));
  }

  postSearchRecord() {
    axios.post(apiEndpoints.postRecords, { searchQuery: this.state.searchQuery }).then(() => {
      this.getSearchRecords();
    });
  }

  handleChange(event) {
    const { target } = event;
    this.setState({ inputField: target, searchQuery: target.value });
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.props.history.push(`/search/${this.state.searchQuery}`);
    }
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
      <div>
        <div className={styles.container}>
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
      </div>
    );
  }
}

Input.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
