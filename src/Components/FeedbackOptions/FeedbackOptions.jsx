import React from 'react';
import PropTypes from 'prop-types';
import {FeedbackContainer, FeedbackButton} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackContainer>
    {options.map(option => (
      <FeedbackButton
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackButton>
    ))}
    
  </FeedbackContainer>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};