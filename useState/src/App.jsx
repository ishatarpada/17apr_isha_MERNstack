import React, { useState } from 'react';

export default function App() {

  const [show, setShow] = useState(false);
  console.log(show);

  const toggle = () => {
    setShow(!show);
  }

  // Function to show alert on button click
  const demo = () => {
    alert("clicked");
  };

  // Function to test with parameters
  const test = (a, b) => {
    console.log(a + b);
  };

  const toggleStyle = {
    backgroundColor: "black",
    color: "white"
  };

  return (
    <>
      {/* Button to toggle the visibility of the content */}
      <button onClick={toggle} className='text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 m-2'>
        {show ? 'Light' : "Dark"}
      </button>

      {/* Conditionally render the content based on the `show` state */}
      {show &&
        <div className='font-serif h-screen w-screen p-5' style={toggleStyle}>
          <h1 className='m-2'>Hello</h1>

          {/* Button that triggers the demo function */}
          <button onClick={demo} className='text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-2'>
            Test
          </button>

          {/* Button that triggers the test function with parameters */}
          <button onClick={() => test(4, 6)} className='text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-2'>
            Test with Params
          </button>
        </div>
      }
    </>
  );
}