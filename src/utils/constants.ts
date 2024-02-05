export const COMMISSION_BANDS = [5000, 10000, 15000, 20000];
export const COMMISSION_RATES = [0, 0.1, 0.15, 0.2, 0.25];

type CommissionBand = {
    band: number;
    rate: number;
  };
  
export const commissionScheme: CommissionBand[] = [
    { band: 0, rate: 0 },
    { band: 5000, rate: 0.1 },
    { band: 10000, rate: 0.15 },
    { band: 15000, rate: 0.2 },
    { band: 20000, rate: 0.25 },
  ];