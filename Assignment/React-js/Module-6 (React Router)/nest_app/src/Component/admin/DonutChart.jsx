import { Chart } from 'react-google-charts';

export default function DonutChart() {
  const data = [
    ['Task', 'Hours per Day'],
    ['Complete', 11],
    ['pending', 2],
    ['Commute', 2],
    ['out of stock', 2],
    ['in stock', 7],
  ];

  const options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
  };

  return (
    <div className='shadow my-5' style={{ width: '900px', height: '500px' }}>
      <Chart
        chartType="PieChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );
}
