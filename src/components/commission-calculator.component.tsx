import { useEffect, useState } from 'react';
import { commissionScheme } from '../utils/constants';
import { WidgetGrid } from './commission-calculator.styles';
import { WidgetCard } from './card.component';
// import { CommissionChart } from './commission-chart.component';

export type Breakdown = { band: number; commission: number };

const initialState = [
  // { band: 0, commission: 0 },
  { band: 5000, commission: 0 },
  { band: 10000, commission: 0 },
  { band: 15000, commission: 0 },
  { band: 20000, commission: 0 },
];
// Pass calculated values to this component
export const CommissionCalculator = ({ revenue }: { revenue: number }): JSX.Element => {
  const [commissionBreakdown, setCommissionBreakdown] = useState<Breakdown[]>(initialState);
  const [totalCommission, setTotalCommission] = useState(0);

  useEffect(() => {
    setCommissionBreakdown(initialState);
    const { total, breakdown } = calculateCommission(revenue);
    setTotalCommission(total);
    const newCommissionState = [...breakdown].map(c => {
      return {
        ...c,
        commission: c.commission,
      };
    });
    setCommissionBreakdown(newCommissionState);
    return () => {
      setCommissionBreakdown(initialState);
      setTotalCommission(0);
    };
  }, [revenue]);

  return (
    <section>
      <p>
        See a full breakdown of how commission was generated below. <br />
        Note that any sales under {commissionScheme[1].band} do not generate commission.
      </p>
      <h2>Total Commission: {totalCommission}</h2>
      <WidgetGrid>
        {commissionBreakdown.length > 0
          ? commissionBreakdown.map(item => (
              <WidgetCard band={item.band} commission={item.commission} />
            ))
          : initialState.map(item => <WidgetCard band={item.band} commission={item.commission} />)}
      </WidgetGrid>
    </section>
  );
};

type CommissionDetails = {
  total: number;
  breakdown: Breakdown[];
};
function calculateCommission(revenue: number): CommissionDetails {
  let remainingRevenue = revenue;
  let total = 0;
  const breakdown: { band: number; commission: number }[] = [];

  for (let i = 1; i < commissionScheme.length; i++) {
    const { band, rate } = commissionScheme[i];

    if (remainingRevenue > band) {
      const amountInBand = Math.min(remainingRevenue - commissionScheme[i - 1].band, band);
      const commissionForBand = amountInBand * rate;
      total += commissionForBand;
      breakdown.push({ band, commission: commissionForBand });

      remainingRevenue -= amountInBand;
    }
  }

  return { total, breakdown };
}
