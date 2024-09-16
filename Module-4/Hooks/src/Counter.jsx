import React, { useState, useEffect } from 'react'
import { counterContext } from './context/context.js';
import Navbar from './Component/Navbar.jsx';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  const inc = () => {
    setCounter(counter + 1);
  }

  useEffect(() => {
    setCalculation(() => counter * 2);
  }, [counter]);


  return (
    <>
      <counterContext.Provider value={{counter , setCounter}}>

        <div className="container-py-5 my-5 border">
          <h1>I've rendered {count} times!</h1>
        </div>

        <div className="container-py-5 my-5 border">
          <h1>Count : {counter} </h1>
          <hr className='w-75 mx-auto mt-3'/>
          <button type="button" className='btn btn-lg btn-dark' onClick={inc}>Increment</button>
          <h1>calculation : {calculation} </h1>
          <hr className='w-75 mx-auto mt-3'/>
        <Navbar />
        </div>
      </counterContext.Provider>
    </>
  )
}
