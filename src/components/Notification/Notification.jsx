import { StyledPar } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <StyledPar>{message}</StyledPar>
    </>
  );
};
