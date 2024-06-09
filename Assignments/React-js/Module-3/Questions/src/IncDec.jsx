import { useState } from 'react'

export default function IncDec() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <>

        <h1 className='text-3xl font-bold text-center text-white mt-5'>Count: {count}</h1>
      <div className="flex items-center justify-center h-screen text-center">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-100 rounded-lg group bg-gradient-to-br from-gray-700 to-gray-900 group-hover:from-gray-600 group-hover:to-gray-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-600 dark:focus:ring-gray-800" onClick={increment}>
          <p className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
            Increment
          </p>
        </button>

        <button className="ms-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-100 rounded-lg group bg-gradient-to-br from-gray-700 to-gray-900 group-hover:from-gray-600 group-hover:to-gray-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-600 dark:focus:ring-gray-800" onClick={decrement}>
          <p className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
            Decrement
          </p>
        </button>
      </div>



    </>
  )
}
