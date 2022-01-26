import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  margin-bottom: 20px;
`;

export const FeedbackButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gainsboro;
  background-color: transparent;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 15px;
  }
`;