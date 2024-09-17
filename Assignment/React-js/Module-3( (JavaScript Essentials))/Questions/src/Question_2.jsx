import { Link } from 'react-router-dom'

export default function Question_2() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 h-screen">
        <h1 className='text-5xl font-bold text-center text-white py-3'>2.  What is NPM in React Js?</h1>
        <hr className="text-white"></hr>

        <div className="container w-8/12 mx-auto mt-10 bg-transparent">
          <ol className="list-group list-group-numbered bg-transparent">
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              NPM is the world largest Software Library
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              The command npm is used to download JavaScript packages from Node Package Manager.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              NPM is an abbreviation used for the node package manager.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              NPM is a package manager for JavaScript.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
            NPM is essential for building and maintaining React.js projects.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              Node package manager it is a dependencies manager of node js without it we can not create an new app inside of react js.
              <ul className='font-bold ms-10 ps-5'>
                <li>&#10170; npm create-react-app app-name</li>
              </ul>
            </li>
          </ol>

          <div className="flex justify-between my-10 ">
          <Link to="/question-1">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sky-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sky-400 text-2xl">
                  Previous
                </span>
              </button>
            </Link>
            <Link to="/question-3">
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
