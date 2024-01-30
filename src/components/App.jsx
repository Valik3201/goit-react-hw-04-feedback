import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/**
 * Main App component that manages the feedback application.
 * @returns {JSX.Element} The rendered App component.
 */
export const App = () => {
  // State to manage feedback counts
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  /**
   * Handles the click event when a user leaves feedback.
   * @param {string} type - The type of feedback (good, neutral, bad).
   */
  const handleLeaveFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  /**
   * Calculates the total count of all feedback.
   * @returns {number} The total count of feedback.
   */
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  /**
   * Calculates the percentage of positive feedback.
   * @returns {number} The percentage of positive feedback.
   */
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = feedback.good;

    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

  // Calculating total feedback count and positive feedback percentage
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const { good, neutral, bad } = feedback;

  // Render the component
  return (
    <Container className="justify-content-center mt-5 mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1 className="mb-3">Feedback Widget</h1>

          {/* Feedback Section */}
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(feedback)}
              onLeaveFeedback={handleLeaveFeedback}
            />
          </Section>

          {/* Statistics Section */}
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
};
