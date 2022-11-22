import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions good={good} neutral={neutral} bad={bad} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    );
  }
}
