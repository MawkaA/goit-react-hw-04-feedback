import React, {  useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const OPTIONS = ['good', 'neutral', 'bad'];

export default function App (){

  const [state, setState]=useState({
    good:0,
    neutral:0,
    bad:0,
  })

  const handleCounter = property => {
    setState(prevState => {
      return {
        ...prevState,
        [property]: prevState[property] + 1,
      };
    });
  };
  const handleTotal=()=>{
  const { good, neutral, bad } = state;
  return good + bad + neutral;
}
 const total=handleTotal();

  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);


  // const handleFeedbackChanger= event => {
  //   const name = event.target.name;
  //   switch (name) {
  //     case 'good':
  //       setState(prev => prev + 1);
  //       break;

  //     case 'neutral':
  //       setState(prev => prev + 1);
  //       break;

  //     case 'bad':
  //       setState(prev => prev + 1);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // const total = (() => good + neutral + bad)();

  const handlePositivePercentage = () =>{
    const { good} = state;
    return total ?((good / total) * 100).toFixed(0) :0;
  } 
  const { good, neutral, bad } = state;
  
  const positivePercentage= handlePositivePercentage();
  return (
      <>
        <Section title="Please leave feedback: ">
          <FeedbackOptions
            handleCounter={handleCounter}
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
