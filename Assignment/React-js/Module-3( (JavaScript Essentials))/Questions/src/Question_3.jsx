import { Link } from 'react-router-dom'

export default function Question_3() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 h-screen">
        <h1 className='text-5xl font-bold text-center text-white py-3'>3. What is Role of Node Js in react Js?</h1>
        <hr className="text-white"></hr>

        <div className="container w-8/12 mx-auto mt-10 bg-transparent">
          <ol className="list-group list-group-numbered bg-transparent">
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
            <b>Server-Side Execution:</b> Node.js can be used as the backend server for React.js applications.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
            <b>Package Management:</b> Node.js comes with npm (Node Package Manager), which is used to manage project dependencies, install packages, and share code between developers. npm is essential for building and maintaining React.js projects.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
            <b>Development Environment:</b> Node.js provides a runtime environment for executing JavaScript code outside the browser. 
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
            <b>Development Server:</b> Node.js allows developers to set up development servers using tools like Express.js.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
            <b>APIs and Backend Integration:</b> React.js applications can interact with these APIs to fetch data, authenticate users, and perform CRUD operations.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
            <b>Deployment:</b> Node.js is commonly used for deploying React.js applications to production servers.
            </li>
          </ol>

          <div className="flex justify-between my-10 ">
          <Link to="/question-2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sky-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sky-400 text-2xl">
                  Previous
                </span>
              </button>
            </Link>
            <Link to="/question-4">
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
