import { Link } from 'react-router-dom'

export default function Question_4() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 h-screen">
        <h1 className='text-5xl font-bold text-center text-white py-3'>4. What is CLI command In React Js?</h1>
        <hr className="text-white"></hr>

        <div className="container w-8/12 mx-auto mt-10 bg-transparent">
        <p className='text-2xl text-white mb-2'>
            &#10170; CLI Stands for Command Line Interface <br />
            &#10170; A command-line interface is a computer program that processes commands in the form of text inputs and in turn execute system functions. <br />
            </p>
          <ol className="list-group list-group-numbered bg-transparent">
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-200 hover:text-slate-400 border-0">
              <span className='fs-4 fw-bold'>Creating a New React App:</span>
              <ul className='ms-10 ps-5'>
                <li><b>&#x2726; Command :</b> npm create-react-app my-app</li>
                <li><b>&#x2726; Description :</b> This command initializes a new React.js project named <b>my-app</b> by setting up the necessary project structure, dependencies, and configuration files.</li>
              </ul>
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-200 hover:text-slate-400 border-0">
              <span className='fs-4 fw-bold'>Installing a dependency:</span>
              <ul className='ms-10 ps-5'>
                <li><b>&#x2726; Command :</b> npm install --save react-router-dom</li>
                <li><b>&#x2726; Description :</b> This command can be installed using normal npm command as React uses the project structure recommended by npm.</li>
              </ul>
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-200 hover:text-slate-400 border-0">
              <span className='fs-4 fw-bold'>Running the application:</span>
              <ul className='ms-10 ps-5'>
                <li><b>&#x2726; Command :</b> npm start</li>
                <li><b>&#x2726; Description :</b> This command is used to start react application.</li>
              </ul>
            </li>
          </ol>

          <div className="flex justify-between my-10 ">
          <Link to="/question-3">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sky-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sky-400 text-2xl">
                  Previous
                </span>
              </button>
            </Link>
            <Link to="/question-5">
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
