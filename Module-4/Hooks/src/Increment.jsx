import React, { useState } from 'react';

export default function Increment() {
  const [number, setNumber] = useState(0);

  const inc = () => {
    setNumber(number + 1);
  };

  const dec = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div className="container border my-5 py-5">
        <h1>Value is {number}</h1>

        <div className="container">
          {/* Add parentheses to properly call the functions in onClick */}
          <button type="button" onClick={inc} className='btn btn-lg m-3 btn-dark'>+</button>
          <button type="button" onClick={dec} className='btn btn-lg m-3 btn-primary'>-</button>
        </div>
      </div>
    </>
  );
}
