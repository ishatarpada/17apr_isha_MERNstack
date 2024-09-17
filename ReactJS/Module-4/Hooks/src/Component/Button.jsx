import React, { useContext } from 'react';
import Component1 from './Component1';
import { counterContext } from '../context/context';

export default function Button() {
  const { counter, setCounter } = useContext(counterContext); 

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        <span><Component1 /></span> Button Click Me!
      </button>
    </div>
  );
}
