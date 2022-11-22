import React, { Component } from 'react';
import { Section } from './Section/Section';

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

  countTotalFeedback = () => {
    let total = 0;
    for (const feedback in this.state) {
      total += this.state[feedback];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section
          good={good}
          neutral={neutral}
          bad={bad}
          goodFeedback={this.handleGoodFeedback}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}

{
  /* <FeedbackOptions
    good={good}
    neutral={neutral}
    bad={bad}
    goodFB={this.handleGoodFeedback}
  />
  <Statistics
  good={good}
  neutral={neutral}
    bad={bad}
    total={this.countTotalFeedback}
    positivePercentage={this.countPositiveFeedbackPercentage}
  /> */
}
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';

// countPositiveFeedbackPercentage = () => {
//   const total = this.countTotalFeedback();
//   let x;
//   const onePercent = total / 100;
//   const fraction = total - this.state.good;
//   x = Math.round(fraction / onePercent);
//   return x;
// };
