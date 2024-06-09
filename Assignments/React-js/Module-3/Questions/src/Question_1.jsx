import { Link } from 'react-router-dom'

export default function Question_1() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 h-screen">
        <h1 className='text-5xl font-bold text-center text-white py-3'>1. What is React Js?</h1>
        <hr className="text-white"></hr>

        <div className="container w-8/12 mx-auto mt-10 bg-transparent">
          <ol className="list-group list-group-numbered bg-transparent">
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              React js is an library of javascript.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              React js is used to make a SPA applications.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              SPA stands for single page applications.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              React is used as library so it is follow life cycle:
              <ul className='font-bold ms-10 ps-5'>
                <li>1. initializations</li>
                <li>2. mounting</li>
                <li>3. updating</li>
                <li>4. unmounting</li>
              </ul>
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              React js is used to create any web application or website ui.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              React js is best for calling api.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              React is used to load an content without page refresh.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              React js is components based.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              React js is used re-usable components.
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              React make a large web application just like linkedin , twitter , whatsapp, netflix , instagram , snapchat etc.
            </li>
          </ol>

          <div className="flex justify-end my-10 ">
            <Link to="/question-2">
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
