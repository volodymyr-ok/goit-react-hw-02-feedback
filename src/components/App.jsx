import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = evt => {
    if (evt.target === evt.currentTarget) {
      return;
    }

    for (const feedback in this.state) {
      if (evt.target.textContent.toLowerCase() === feedback) {
        this.setState(prevState => {
          return { [feedback]: prevState[feedback] + 1 };
        });
      }
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          good={good}
          neutral={neutral}
          bad={bad}
          goodFB={this.handleGoodFeedback}
        />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    );
  }
}
