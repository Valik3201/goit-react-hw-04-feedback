import PropTypes from 'prop-types';

/**
 * @component
 * @description A component to render sections with a title and content.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {ReactNode} props.children - The content to be displayed within the section.
 * @returns {JSX.Element} The rendered Section component.
 */
export const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
