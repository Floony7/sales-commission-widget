import styled from 'styled-components';

export const AppWrapper = styled.main`
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.03);
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
`;

export const InnerWrapper = styled.section`
    width: 80vw;
    max-width: 2400px;
    margin-top: 3rem;
    padding: 2rem;
    margin: 0;
`;

export const Button = styled.button`
border-radius: 5px;
  border: 1px solid transparent;
  padding: 5px 10px;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgba(30, 144, 255, 1);
  color: #fff;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    border-color: #646cff;
    background-color: rgba(30, 144, 255, 0.7);
  }
`