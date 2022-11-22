import { StyledDiv } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ goodFeedback }) => {
  return (
    <StyledDiv onClick={goodFeedback}>
      <h2>Please leave feedback</h2>

      <button className="goodBtn">Good</button>
      <button className="neutralBtn">Neutral</button>
      <button className="badBtn">Bad</button>
    </StyledDiv>
  );
};
