import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 10px;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 25px;
  }

  p:not(:last-child) {
    margin-bottom: 5px;
  }

  p {
    font-size: 20px;
    &.good {
      -webkit-text-stroke: 1px #2ded54;
      text-shadow: 1px 1px 30px #2ded54, -1px -1px 30px #2ded54;
    }
    &.neutral {
      -webkit-text-stroke: 1px #f8ff78;
      text-shadow: 1px 1px 30px #f8ff78, -1px -1px 30px #f8ff78;
    }
    &.bad {
      -webkit-text-stroke: 1px #e13b5a;
      text-shadow: 1px 1px 30px #e13b5a, -1px -1px 30px #e13b5a;
      margin-bottom: 35px;
    }
  }

  .statsTag {
    font-weight: 500;
  }
`;
