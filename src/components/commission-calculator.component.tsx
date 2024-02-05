/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { COMMISSION_BANDS, COMMISSION_RATES } from '../utils/constants';

// Pass calculated values to this component
export const CommissionCalculator = ({ revenue }: { revenue: number }): JSX.Element => {
  return (
    <section>
      <p>
        Here will bring in the revenue of {isNaN(revenue) ? 0 : revenue} and use the custom hook to
        run the calculations
      </p>
      This will render the chart element.
    </section>
  );
};
