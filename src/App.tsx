import { useState } from 'react';
import './App.css';
import { CommissionCalculator } from './components/commission-calculator.component';
import { CommissionChart } from './components/commission-chart.component';

function App() {
  const [inputAmount, setInputAmount] = useState('');
  const [revenue, setRevenue] = useState(0);
  // const revenueInputRef = useRef<HTMLInputElement>(null);

  const handleSubmitRevenue = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseInt(inputAmount);
    // Validation: for now just log error, however, would use Zod or similar to parse input and provide user feedback
    if (inputAmount === '' || isNaN(amount)) {
      console.warn('Invalid amount');
      return;
    }
    // Calculate and update state object for each commission band
    setRevenue(amount);

    // Clear input
    setInputAmount('');
  };
  console.log('REVENUE', revenue, inputAmount);
  return (
    <>
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
        <button type="submit" style={{ marginLeft: '0.5rem' }}>
          Submit
        </button>
      </form>
      <CommissionCalculator revenue={revenue} />
      <CommissionChart />
    </>
  );
}

export default App;
