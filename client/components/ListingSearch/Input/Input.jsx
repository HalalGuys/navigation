import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.css';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.clearSearchQuery = this.clearSearchQuery.bind(this);
    this.state = {
      searchQuery: '',
      inputField: null,
    };
  }

  handleChange(event) {
    const target = event.target;
    this.setState({ inputField: target, searchQuery: target.value });
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.props.getSearchResults(this.state.searchQuery);
      this.clearSearchQuery();
    }
  }

  clearSearchQuery() {
    if (this.state.inputField) {
      this.setState({ searchQuery: '' }, () => {
        this.state.inputField.value = '';
      });
    }
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <input
          value={searchQuery}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          autoFocus
        />
      </div>
    );
  }
}
