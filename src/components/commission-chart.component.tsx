import { VictoryPie } from 'victory';
/* 
  Bring in the calculation data and render it here. 
  The sole purpose of this chart component is to render the data graphically
  There will be a 
*/
export const CommissionChart = () => {
  return (
    <>
      <VictoryPie
        data={[
          { x: 'Cats', y: 35 },
          { x: 'Dogs', y: 40 },
          { x: 'Birds', y: 55 },
        ]}
      />
    </>
  );
};
