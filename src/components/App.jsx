import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/**
 * @class App
 * @description The main application component for the Expresso Feedback Widget.
 */
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.handleLeaveFeedback = this.handleLeaveFeedback.bind(this);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage.bind(this);
  }

  /**
   * @method
   * @description Updates the feedback count based on the selected option.
   * @param {string} type - The type of feedback option ('good', 'neutral', or 'bad').
   */
  handleLeaveFeedback(type) {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  }

  /**
   * @method
   * @description Calculates the total number of feedback received.
   * @returns {number} The total feedback count.
   */
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  /**
   * @method
   * @description Calculates the percentage of positive feedback.
   * @returns {number} The percentage of positive feedback.
   */
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positive = this.state.good;

    return total > 0 ? Math.round((positive / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container className="justify-content-center mt-5 mb-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h1 className="mb-3">Feedback Widget</h1>

            <Section title="Please leave feedback">
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.handleLeaveFeedback}
              />
            </Section>
            <Section title="Statistics">
              {total > 0 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage}
                />
              ) : (
                <Notification message="There is no feedback" />
              )}
            </Section>
          </Col>
        </Row>
      </Container>
    );
  }
}
