import React from 'react';
import PropTypes from 'prop-types';
import { functions } from '../../utils';

import styles from './History.css';

const { handleKeyUp } = functions;

const getMatchingRecords = (searchRecords, searchQuery) => {
  const filteredRecords = [];
  const recorded = {};
  searchRecords.forEach((searchRecord) => {
    if (filteredRecords.length === 5) {
      return;
    }
    if (
      searchRecord.text
      && !recorded[searchRecord.text]
      && searchRecord.text.indexOf(searchQuery) >= 0
    ) {
      recorded[searchRecord.text] = true;
      filteredRecords.push(searchRecord);
    }
  });
  return filteredRecords;
};

const History = (props) => {
  const { searchRecords, searchQuery, handleClick } = props;
  const relevantSearchRecords = getMatchingRecords(searchRecords, searchQuery);
  let recordsView = <div />;
  if (relevantSearchRecords.length) {
    recordsView = (
      <div className={styles.records}>
        {relevantSearchRecords.map(searchRecord => (
          <div
            className={styles.record}
            onClick={() => handleClick(searchRecord.text)}
            onKeyUp={e => handleKeyUp(e, handleClick)}
            role="link"
            tabIndex="0"
          >
            <span className={styles.query}>
              {searchRecord.text}
            </span>
            <span className={styles.time}>
              {searchRecord.createdAt.split('T')[0]}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      {recordsView}
    </div>
  );
};

History.propTypes = {
  searchRecords: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      createdAt: PropTypes.string,
    }),
  ).isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

module.exports = History;
