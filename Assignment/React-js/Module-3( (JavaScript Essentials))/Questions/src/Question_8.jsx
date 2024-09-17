import React from 'react'
import { Link } from 'react-router-dom'

export default function Question_8() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-2 h-screen">
        <h1 className='text-3xl font-bold text-center text-white py-3'>
          8. How to check version of React Js?
        </h1>
        <hr className="text-white"></hr>

        <div className="container w-8/12 mx-auto mt-10 bg-transparent">
          <div className='text-2xl text-white'>
            <h1 className='mb-5 font-bold underline'>Check version of React Js</h1>
            <ul className='ms-10'>
              <li>
                <p className="mb-4">1. Using package.json</p>
                <div className='w-full p-2 text-xl text-black bg-white rounded ms-5'>
                  <pre>
                    <code>
                      {`{
                        "dependencies": {
                          "react": "^17.0.2",
                          "react-dom": "^17.0.2"
                        }
                      }`}
                    </code>
                  </pre>
                </div>
              </li>
              <li>
                <p className='mt-5 mb-4'>2. Using Command Line</p>
                <div className='w-full p-2 text-xl text-black bg-white rounded ms-5'>
                  <pre>
                    <code>
                      npm list react<br />
                      npm list react-dom
                    </code>
                  </pre>
                </div>
              </li>
              <li>
                <p className='mt-5 mb-4'>3. Using JavaScript</p>
                <div className='w-full p-2 text-xl text-black bg-white rounded ms-5'>
                  <pre>
                    <code>
                      console.log(`React version: ${React.version}`);
                    </code>
                  </pre>
                </div>
              </li>
            </ul>
          </div>
          <hr className='my-10' />

          <div className="flex justify-between my-10">
            <Link to="/question-7">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sky-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sky-400 text-2xl">
                  Previous
                </span>
              </button>
            </Link>
            <Link to="/question-9">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sky-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sky-400 text-2xl">
                  Next
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
