import React from 'react';
import PropTypes from 'prop-types';
import { StatisticMenu, StatisticItem } from './Statistics.styled';

const Statistics = ({ Good, Neutral, Bad, total, positivePercentage }) => (
  <StatisticMenu>
    <StatisticItem>Good: {Good}</StatisticItem>
    <StatisticItem>Neutral: {Neutral}</StatisticItem>
    <StatisticItem>Bad: {Bad}</StatisticItem>
    <StatisticItem>Total: {total}</StatisticItem>
    <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
  </StatisticMenu>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};