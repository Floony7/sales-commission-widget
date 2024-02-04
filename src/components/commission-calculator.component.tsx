/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { COMMISSION_BANDS, COMMISSION_RATES } from '../utils/constants';

export const CommissionCalculator = ({ revenue }: { revenue: number }): JSX.Element => {
  const commissionBreakdown = useCommissionCalculator(revenue);
  return (
    <section>
      <p>
        Here will bring in the revenue of {revenue} and use the custom hook to run the calculations
      </p>
      This will render the chart element.
    </section>
  );
};

// type Breakdown = { band: number; commision: number };

function useCommissionCalculator(revenue: number) {
  // const [breakdownPerBand, setBreakDownPerBand] = useState<Breakdown>();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculation = revenue * COMMISSION_BANDS[2];
    setTotal(calculation);
  }, [revenue]);

  return total;
}
