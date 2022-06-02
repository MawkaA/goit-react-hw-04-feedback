import React, {  useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const OPTIONS = ['good', 'neutral', 'bad'];

export default function App (){

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackChanger= event => {
    const name = event.target.name;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const total = (() => good + neutral + bad)();

  const positivePercentage = (() =>
    total ? Math.round((good / total) * 100) : 0)();


  return (
      <>
        <Section title="Please leave feedback: ">
          <FeedbackOptions
            onClick={handleFeedbackChanger}
            options={OPTIONS}
          />
        </Section>
        <Section title="Statistics :">
          {((good || bad || neutral) && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )) || <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  
}
