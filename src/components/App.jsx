import React, {  useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App (){


  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackChanger = (options) => {
    switch (options) {
      case "good":
        setGood((good) => good + 1);
        break;
      case "neutral":
        setNeutral((neutral) => neutral + 1);
        break;
      case "bad":
        setBad((bad) => bad + 1);
        break;

      default:
        return;
    }
  };

  let countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  let countPositiveFeedbackPercentage = () => {
    let positivePercentage = (good / (good + neutral + bad)) * 100;
    return positivePercentage.toFixed();
  };

  const options = ["good", "neutral", "bad"];
  const total = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();

  return (
      <>
        <Section title="Please leave feedback: ">
          <FeedbackOptions
            onLeaveFeedback={handleFeedbackChanger}
            options={options}
          />
        </Section>
        <Section title="Statistics :">
          {((good || bad || neutral) && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percent}
            />
          )) || <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  
}
