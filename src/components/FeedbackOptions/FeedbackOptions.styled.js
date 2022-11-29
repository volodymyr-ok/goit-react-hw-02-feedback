import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 10px;
  margin-bottom: 50px;
  text-align: center;

  button {
    letter-spacing: 2px;
    background-color: transparent;
    border: 4px double #fc78ff5e;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px 15px;
    color: inherit;
    cursor: pointer;

    transition-property: color, box-shadow, border-color, box-shadow,
      -webkit-text-stroke;
    transition-duration: 250ms;
  }
  button:hover {
    box-shadow: 10px 10px 30px #2400ff, -10px -10px 30px #7e2bd9;
    background-color: transparent;
    &.goodBtn {
      border-color: #2ded54;
      background-color: transparent;
      -webkit-text-stroke: 1px #2ded54;
      box-shadow: 1px 1px 30px #2ded54, -1px -1px 30px #2ded54,
        inset 1px 1px 30px #2ded5424, inset -1px -1px 30px #2ded5424;
    }
    &.neutralBtn {
      border-color: #f8ff78;
      background-color: transparent;
      -webkit-text-stroke: 1px #f8ff78;
      box-shadow: 1px 1px 30px #f8ff78, -1px -1px 30px #f8ff78,
        inset 1px 1px 30px #f8ff7836, inset -1px -1px 30px #f8ff7836;
    }
    &.badBtn {
      border-color: #e13b5a;
      background-color: transparent;
      -webkit-text-stroke: 1px #e13b5a;
      box-shadow: 1px 1px 30px #e13b5a, -1px -1px 30px #e13b5a,
        inset 1px 1px 30px #e13b5a38, inset -1px -1px 30px #e13b5a38;
    }
  }

  button:not(:last-child) {
    margin-right: 15px;
  }
`;
