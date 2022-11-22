import React, { Component } from 'react';
import { StyledDiv } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  handleGoodFeedback = evt => {
    if (evt.target === evt.currentTarget) {
      return;
    }

    console.log(this.props);
    console.log(evt.target);

    // this.setState(prevState);
  };

  render() {
    return (
      <StyledDiv onClick={this.handleGoodFeedback}>
        <h2>Please leave feedback</h2>

        <button className="goodBtn">Good</button>
        <button className="neutralBtn">Neutral</button>
        <button className="badBtn">Bad</button>
      </StyledDiv>
    );
  }
}
