import { useState } from 'react';
import { CommissionCalculator } from './components/commission-calculator.component';
import { AppWrapper, Button, InnerWrapper } from './global.styles';

function App() {
  const [inputAmount, setInputAmount] = useState('');
  const [revenue, setRevenue] = useState(0); // Could omit this state, parseInt and perform calculations on revenue in this component instead

  const handleSubmitRevenue = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseInt(inputAmount);
    // Validation: for now just log error, however, would use Zod or similar to parse input and provide user feedback
    if (inputAmount === '' || isNaN(amount)) {
      console.warn('Invalid amount');
      return;
    }
    setRevenue(amount);
    setInputAmount('');
  };
  // console.log('REVENUE', revenue, inputAmount);
  return (
    <AppWrapper>
      <InnerWrapper>
        <h2 style={{ fontSize: '1.8rem' }}>Commission calculator</h2>
        <form onSubmit={handleSubmitRevenue}>
          <label style={{ paddingRight: '0.5rem' }}>Enter Revenue Amount</label>
          <input
            type="text"
            name="revenue"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Enter revenue amount"
            value={inputAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputAmount(e.target.value)}
            style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <Button type="submit" style={{ marginLeft: '0.5rem' }}>
            Submit
          </Button>
          <Button onClick={() => setRevenue(0)} style={{ marginLeft: '0.5rem' }}>
            Reset
          </Button>
        </form>
        <CommissionCalculator revenue={revenue} />
      </InnerWrapper>
    </AppWrapper>
  );
}

export default App;
