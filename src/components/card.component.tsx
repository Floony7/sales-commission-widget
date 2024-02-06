import styled from 'styled-components';
import { Breakdown } from './commission-calculator.component';

export const CardWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 1.5rem;
  min-height: 200px;
  height: auto;

  h3 {
    padding: 0;
    margin: 0;
  }
`;

export const WidgetCard = ({ band, commission }: Breakdown) => {
  return (
    <CardWrapper>
      <h3>Band: {band}</h3>
      <h3>Commission: {commission}</h3>
    </CardWrapper>
  );
};
