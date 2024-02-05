import { useEffect, useState } from 'react';
import { commissionScheme } from '../utils/constants';
import { WidgetGrid, WidgetItem } from './commission-calculator.styles';
// import { CommissionChart } from './commission-chart.component';

type CommissionBreakdown = {
  totalCommission: number;
  breakdown: { band: number; commission: number }[];
};

const initialState = {
  totalCommission: 0,
  breakdown: [
    { band: 0, commission: 0 },
    { band: 5000, commission: 0 },
    { band: 10000, commission: 0 },
    { band: 15000, commission: 0 },
    { band: 20000, commission: 0 },
  ],
};
// Pass calculated values to this component
export const CommissionCalculator = ({ revenue }: { revenue: number }): JSX.Element => {
  const [commissionBreakdown, setCommissionBreakdown] = useState<CommissionBreakdown>(initialState);

  useEffect(() => {
    const breakdown = calculateCommission(revenue);
    setCommissionBreakdown(breakdown);
    console.log(breakdown);
  }, [revenue]);

  return (
    <section>
      <p>
        Here will bring in the revenue of {isNaN(revenue) ? 0 : revenue} and use the custom hook to
        run the calculations
      </p>
      This will render the chart element.
      <WidgetGrid>
        {commissionBreakdown.breakdown.length > 0
          ? commissionBreakdown.breakdown.map(item => (
              <WidgetItem key={item.band}>
                {item.band}: {item.commission}
              </WidgetItem>
            ))
          : initialState.breakdown.map(item => (
              <WidgetItem key={item.band}>
                {item.band}: {item.commission}
              </WidgetItem>
            ))}
      </WidgetGrid>
    </section>
  );
};

function calculateCommission(revenue: number): CommissionBreakdown {
  let remainingRevenue = revenue;
  let totalCommission = 0;
  const breakdown: { band: number; commission: number }[] = [];

  for (let i = 1; i < commissionScheme.length; i++) {
    const { band, rate } = commissionScheme[i];

    if (remainingRevenue > band) {
      const amountInBand = Math.min(remainingRevenue - commissionScheme[i - 1].band, band);
      const commissionForBand = amountInBand * rate;
      totalCommission += commissionForBand;
      breakdown.push({ band, commission: commissionForBand });

      remainingRevenue -= amountInBand;
    }
  }

  return { totalCommission, breakdown };
}
