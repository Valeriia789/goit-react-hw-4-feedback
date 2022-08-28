import React, { Component, useEffect, useState } from 'react'

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {good, neutral,bad}

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>

      {this.countTotal() === 0 ? (
        <Notification message="There is no feedback yet :( " />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotal()}
            positivePercentage={this.countPositivePercentage()}
          />
        </Section>
      )}
    </div>
  );
}

export default App;