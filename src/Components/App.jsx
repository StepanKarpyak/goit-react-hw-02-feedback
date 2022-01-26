import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import { Container } from './App.styled';

class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

optionsKeys = Object.keys(this.state);

  leaveFeedback = label => {
    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { Good, Neutral, Bad } = this.state;
    return Math.round((Good / (Good + Bad + Neutral)) * 100);
  };

  render() {
    const { Good, Neutral, Bad } = this.state

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.optionsKeys}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
                Good={Good}
              Neutral={Neutral}
              Bad={Bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}

export default App;