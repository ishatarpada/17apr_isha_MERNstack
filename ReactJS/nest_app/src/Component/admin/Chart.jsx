import { Chart as GoogleChart } from 'react-google-charts';

export default function Chart() {
  const data = [
    ['Year', 'Positive', 'negative'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ];

  const options = {
    title: 'Reviews',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
  };
  return (
    <>
      <div className='shadow my-3' style={{ width: '100%', height: '500px' }}>
      <GoogleChart
        chartType="AreaChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
      </div>
    </>
  )
}

