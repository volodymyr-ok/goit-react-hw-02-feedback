import { Notification } from '../Notification/Notification';
import { StyledDiv } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total() ? (
    <StyledDiv>
      <h2>Statistics</h2>

      <p>
        <span className="statsTag">Good:</span> {good}
      </p>
      <p>
        <span className="statsTag">Neutral:</span> {neutral}
      </p>
      <p>
        <span className="statsTag">Bad:</span> {bad}
      </p>
      <p>
        <span className="statsTag">Total:</span> {total()}
      </p>
      <p>
        <span className="statsTag">Positive feedback:</span>{' '}
        {positivePercentage()}%
      </p>
    </StyledDiv>
  ) : (
    <Notification message="There is no feedback" />
  );
};
