import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 10px;
  h2 {
    font-size: 36px;
    margin-bottom: 25px;
  }

  button {
    background-color: transparent;
    border: 1px solid lightgrey;
    border-radius: 4px;
    font-size: 20px;
    padding: 5px;
    width: 100px;
    cursor: pointer;

    transition: box-shadow 250ms;
  }
  button:hover {
    box-shadow: 1px 2px 5px grey;
  }

  button:not(:last-child) {
    margin-right: 10px;
  }
`;
