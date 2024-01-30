import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

/**
 * @component
 * @description A component to render notifications with a styled appearance.
 * @param {Object} props - The component props.
 * @param {string} props.message - The message to be displayed.
 * @returns {JSX.Element} The rendered Notification component.
 */
export const Notification = ({ message }) => (
  <Alert variant="danger" className="mt-3">
    {message}
  </Alert>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
