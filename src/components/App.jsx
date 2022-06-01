import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


const options =["good", "neutral","bad"];
class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let positivePercentage = (good / (good + neutral + bad)) * 100;

    return positivePercentage.toFixed();
  };

  handleFeedbackChanger = e => {
    const { step } = this.props;
    const { name } = e.target;

    this.setState(prevState => ({ [name]: prevState[name] + step }));
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <>
        <Section title="Please leave feedback: ">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedbackChanger}
            options={options}
          />
        </Section>
        <Section title="Statistics :">
          {((good || bad || neutral) && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )) || <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  }
}
export default App;