import { StyledPar } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <>
      <StyledPar>{message}</StyledPar>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
