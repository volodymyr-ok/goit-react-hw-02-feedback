import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

export const Section = ({
  good,
  neutral,
  bad,
  goodFeedback,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <FeedbackOptions goodFeedback={goodFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </>
  );
};
