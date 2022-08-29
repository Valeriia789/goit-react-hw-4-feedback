import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [options, setFeedbacks] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  const onLeaveFeedback = option => {
    setFeedbacks(state => ({
      ...state,
      [option]: state[option] + 1,
    }));
  };

  const countTotal = () => {
    return Object.values(options).reduce((previousValue, newFeedback) => {
      return previousValue + newFeedback;
    }, 0);
  };

  const countPositivePercentage = () => {
    const total = (options.Good * 100) / countTotal();
    return Math.round(total) >= 0 ? Math.round(total) : 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {countTotal() === 0 ? (
        <Notification message="There is no feedback yet :( " />
      ) : (
        <Section title="Statistics">
          <Statistics
            options={options}
            countPositivePercentage={countPositivePercentage}
            countTotal={countTotal}
          />
        </Section>
      )}
    </div>
  );
};

export default App;
