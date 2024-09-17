import { Link } from 'react-router-dom'

export default function Question_5() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 h-screen">
        <h1 className='text-5xl font-bold text-center text-white py-3'>5. What is Components in React Js?</h1>
        <hr className="text-white"></hr>

        <div className="container w-8/12 mx-auto mt-10 bg-transparent">
          <ol className="list-group list-group-numbered bg-transparent">
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              Components is small peace of file this is saved inside of react using .js or .jsx this is called components.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              Components are independent and reusable.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              Components are reuse multiples time in any components.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              Components are two types:
              <ul className='font-bold ms-10 ps-5 mt-6'>
                <li>
                  <span className='text-2xl mt-6'>&#x2726; Function based components</span>
                  <ol className="list-group bg-transparent font-normal mb-6">
                    <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                      Function based components are max used inside of react 18.2.0 version.
                    </li>
                    <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                      Function based components are used a hooks.
                    </li>
                    <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                      Components are reuse multiples time in any components.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className='text-2xl mt-6'>&#x2726; Class based components</span>
                  <ol className="list-group bg-transparent font-normal mb-6">
                    <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                    Class components are JavaScript ES6 classes that extend from React's Component class. 
                    </li>
                    <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                    Since class components predate hooks, they do not support hooks like useState, useEffect, etc. Hooks are only available in functional components.
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
          </ol>

          <div className="flex justify-between my-10 ">
            <Link to="/question-4">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sky-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sky-400 text-2xl">
                  Previous
                </span>
              </button>
            </Link>
            <Link to="/question-6">
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
