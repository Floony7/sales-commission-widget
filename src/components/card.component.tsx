import { WidgetItem } from './commission-calculator.styles';
import { Breakdown } from './commission-calculator.component';

export const WidgetCard = ({ band, commission }: Breakdown) => {
  return (
    <WidgetItem>
      <h3>Band: {band}</h3>
      <h3>Commission: {commission}</h3>
    </WidgetItem>
  );
};
