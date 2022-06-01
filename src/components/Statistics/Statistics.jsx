import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.container}>
    <p className={css.paragraph}>Good: {good}</p>
    <p className={css.paragraph}>Neutral: {neutral}</p>
    <p className={css.paragraph}>Bad: {bad}</p>
    <p className={css.paragraph}>Total: {total}</p>
    <p className={css.paragraph}>Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;