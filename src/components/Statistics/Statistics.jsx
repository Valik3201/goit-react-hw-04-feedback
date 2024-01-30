import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';

/**
 * @component
 * @description A component to render statistics with a styled appearance.
 * @param {Object} props - The component props.
 * @param {number} props.good - The number of 'good' feedback.
 * @param {number} props.neutral - The number of 'neutral' feedback.
 * @param {number} props.bad - The number of 'bad' feedback.
 * @param {number} props.total - The total number of feedback.
 * @param {number} props.positivePercentage - The percentage of positive feedback.
 * @returns {JSX.Element} The rendered Statistics component.
 */
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className="d-flex flex-column gap-2 mt-3">
    <ProgressBar
      variant="danger"
      now={(bad / total) * 100}
      label={`Bad: ${bad}`}
    />
    <ProgressBar
      variant="warning"
      now={(neutral / total) * 100}
      label={`Neutral: ${neutral}`}
    />
    <ProgressBar
      variant="success"
      now={(good / total) * 100}
      label={`Good: ${good}`}
    />
    <h4 className="fw-bold mt-3">
      Total <Badge bg="info">{total}</Badge>
    </h4>
    <p className="fw-bold">Positive Feedback Percentage</p>
    <ProgressBar
      animated
      now={positivePercentage}
      label={`${positivePercentage}%`}
    />
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
