import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 10px;

  h2 {
    font-size: 36px;
    margin-bottom: 25px;
  }

  p {
    font-size: 20px;
  }
  p:not(:last-child) {
    margin-bottom: 5px;
  }

  .statsTag {
    font-weight: 500;
  }
`;
