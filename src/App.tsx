import { useState } from 'react';
import './App.css';
import { CommissionCalculator } from './components/commission-calculator.component';
import { CommissionChart } from './components/commission-chart.component';

function App() {
  const [revenue, setRevenue] = useState(0);

  return (
    <>
      <form>
        <label style={{ paddingRight: '0.5rem' }}>Enter Revenue Amount</label>
        <input
          type="text"
          name="revenue"
          placeholder="Enter revenue amount"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRevenue(parseInt(e.target.value))
          }
          style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </form>
      <CommissionCalculator revenue={revenue} />
      <CommissionChart />
    </>
  );
}

export default App;
