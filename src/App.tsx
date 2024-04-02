import { useState } from 'react';
import { CommissionCalculator } from './components/commission-calculator.component';
import { AppWrapper, Button, InnerWrapper } from './global.styles';

function App() {
  const [inputAmount, setInputAmount] = useState(0);
  const [revenue, setRevenue] = useState(0); // Could omit this state, parseInt and perform calculations on revenue in this component instead

  const clear = (): void => {
    setRevenue(0);
    setInputAmount(0);
  };

  const handleSubmitRevenue = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation: for now just log error, however, would use Zod or similar to parse input and provide user feedback
    if (isNaN(inputAmount)) {
      console.warn('Invalid amount');
      return;
    }
    setRevenue(inputAmount);
  };

  return (
    <AppWrapper>
      <InnerWrapper>
        <h2 style={{ fontSize: '1.8rem' }}>Commission calculator</h2>
        <form onSubmit={handleSubmitRevenue}>
          <label style={{ paddingRight: '0.5rem' }}>Enter Revenue Amount</label>
          <input
            type="number"
            name="revenue"
            placeholder="Enter revenue amount"
            value={inputAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputAmount(parseInt(e.target.value))
            }
            style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <Button type="submit" style={{ marginLeft: '0.5rem' }}>
            Submit
          </Button>
          <Button onClick={clear} style={{ marginLeft: '0.5rem' }}>
            Reset
          </Button>
        </form>
        <CommissionCalculator revenue={revenue} />
      </InnerWrapper>
    </AppWrapper>
  );
}

export default App;
