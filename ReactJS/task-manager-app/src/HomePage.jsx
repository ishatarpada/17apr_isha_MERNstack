import React , {useState} from 'react'
import Header from './Header'
import logo from './assets/logo.svg'
import { v4 as uuidv4 } from 'uuid';

// destructuring 

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="container text-white min-h-screen flex items-center justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center items-center mx-auto  w-full">
          <div className=" flex justify-center items-center p-5">
            <img src={logo} alt="image" className="mx-auto img-fluid" />
          </div>
          <div className="pt-10 text-center  p-5">
            <h1 className="text-5xl font-bold text-center">Welcome, Task Manager App</h1>

            <ul className="pt-10 mt-5 text-xl list-none">
              <li className="mt-5">
                <button
                  type="button"
                  className="text-white w-80 bg-gradient-to-r from-lime-200 to-lime-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
                >
                  <a href="/add-task">Create Task</a>
                </button>
              </li>
              <li className="mt-5">
                <button
                  type="button"
                  className="text-white w-80 bg-gradient-to-r from-lime-200 to-lime-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
                >
                  <a href="/manage-task">Read Task</a>
                </button>
              </li>
              <li className="mt-5">
                <button
                  type="button"
                  className="text-white w-80 bg-gradient-to-r from-lime-200 to-lime-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
                >
                  Update Task
                </button>
              </li>
              <li className="mt-5">
                <button
                  type="button"
                  className="text-white w-80 bg-gradient-to-r from-lime-200 to-lime-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
                >
                  Delete Task
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
