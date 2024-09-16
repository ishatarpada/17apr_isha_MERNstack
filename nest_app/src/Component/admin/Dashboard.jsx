import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Chart from './Chart';
import DonutChart from './DonutChart';

export default function Dashboard() {
  return (
    <>
      <div className="flex h-full">
        <Sidebar />

        <div className="dashboard-container container-fluid overflow-hidden">
          <Navbar />
          <h1 className='text-center font-bold text-5xl my-3'>Dashboard</h1>
          <div className="row justify-between items-center self-center gap-3 container my-5">
            <div className="col-md-3 bg-yellow-200 text-yellow-900 font-bold text-center p-5 font-serif d-flex justify-content-center align-items-center">100 Order</div>
            <div className="col-md-3 bg-green-200 text-green-900 font-bold text-center p-5 font-serif d-flex justify-content-center align-items-center">86 Order Complete</div>
            <div className="col-md-3 bg-purple-200 text-purple-900 font-bold text-center p-5 font-serif d-flex justify-content-center align-items-center">14 Pending Order</div>
          </div>

          <Chart />
        </div>

      </div>
    </>

  );
}
