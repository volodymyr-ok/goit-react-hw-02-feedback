import PropTypes from 'prop-types';
import { StyledDiv } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <StyledDiv>
      <h2>{title}</h2>
      {children}
    </StyledDiv>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
