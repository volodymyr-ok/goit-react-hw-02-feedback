import React, { Component } from 'react';
import { StyledDiv } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <StyledDiv onClick={this.props.goodFB}>
        <h2>Please leave feedback</h2>

        <button className="goodBtn">Good</button>
        <button className="neutralBtn">Neutral</button>
        <button className="badBtn">Bad</button>
      </StyledDiv>
    );
  }
}
