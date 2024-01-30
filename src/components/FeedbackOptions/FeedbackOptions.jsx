import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/**
 * @component
 * @description A component to render feedback options as buttons.
 * @param {Object} props - The component props.
 * @param {string[]} props.options - An array of feedback options.
 * @param {Function} props.onLeaveFeedback - The callback function to handle feedback selection.
 * @returns {JSX.Element} The rendered FeedbackOptions component.
 */
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup
      aria-label="Feedback options"
      className="d-flex justify-content-center mt-3 mb-3"
    >
      {options.map(option => {
        const capitalizedOption =
          option.charAt(0).toUpperCase() + option.slice(1);

        return (
          <Button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            aria-label={option}
            variant="outline-primary"
          >
            {capitalizedOption}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
