import { useEffect, useState } from 'react';
import { commissionScheme } from '../utils/constants';
import { WidgetGrid } from './commission-calculator.styles';
import { WidgetCard } from './card.component';

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
    setCommissionBreakdown(breakdown);

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
              <WidgetCard key={item.band} band={item.band} commission={item.commission} />
            ))
          : initialState.map(item => (
              <WidgetCard key={item.band} band={item.band} commission={item.commission} />
            ))}
      </WidgetGrid>
    </section>
  );
};

type CommissionDetails = {
  total: number;
  breakdown: Breakdown[];
};

function calculateCommission(amount: number): CommissionDetails {
  if (amount <= 5000) {
    return { total: 0, breakdown: [] };
  }
  let remainingAmount = amount;
  let totalCommission = 0;
  const breakdown: { band: number; commission: number }[] = [];
  const maxBand = commissionScheme[commissionScheme.length - 1].band;

  for (let i = 1; i < commissionScheme.length; i++) {
    const { band, rate } = commissionScheme[i];
    const previousBand = commissionScheme[i - 1].band;
    let bandAmount: number;

    if (amount > band && band !== maxBand) {
      bandAmount = band - previousBand;
    } else if (amount > previousBand && amount < band) {
      bandAmount = amount - previousBand;
    } else {
      bandAmount = amount - maxBand;
    }

    console.log(bandAmount);

    const commission = bandAmount * rate;
    totalCommission += commission;
    remainingAmount -= bandAmount;
    breakdown.push({ band: band, commission: commission });

    if (remainingAmount <= 0) {
      break;
    }
  }

  return { total: totalCommission, breakdown: breakdown };
}
