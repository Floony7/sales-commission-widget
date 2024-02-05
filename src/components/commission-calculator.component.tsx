import { useEffect, useState } from 'react';
import { commissionScheme } from '../utils/constants';
import { WidgetGrid } from './commission-calculator.styles';
import { WidgetCard } from './card.component';
// import { CommissionChart } from './commission-chart.component';

export type Breakdown = { band: number; commission: number };

type CommissionBreakdown = {
  totalCommission: number;
  breakdown: Breakdown[];
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
    setCommissionBreakdown(prevCommissionBreakdown => {
      const { totalCommission, breakdown } = calculateCommission(revenue);
      const newCommissionBreakdown = { ...prevCommissionBreakdown, totalCommission, breakdown };
      return newCommissionBreakdown;
    });
  }, [revenue]);

  return (
    <section>
      <p>
        See a full breakdown of how commission was generated below. <br />
        Note that any sales under {commissionScheme[1].band} do not generate commission.
      </p>
      <h2>Total Commission: {commissionBreakdown.totalCommission}</h2>
      <WidgetGrid>
        {commissionBreakdown.breakdown.length > 0
          ? commissionBreakdown.breakdown.map(item => (
              <WidgetCard band={item.band} commission={item.commission} />
            ))
          : initialState.breakdown.map(item => (
              <WidgetCard band={item.band} commission={item.commission} />
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
