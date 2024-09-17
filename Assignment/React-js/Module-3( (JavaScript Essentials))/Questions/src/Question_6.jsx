import { Link } from 'react-router-dom'

export default function Question_6() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-2">
        <h1 className='text-5xl font-bold text-center text-white py-3'>6.  What is Header and Content Components in React Js?</h1>
        <hr className="text-white"></hr>

        <div className="container w-8/12 mx-auto mt-10 bg-transparent">
          <ol className="list-group bg-transparent">
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              <span className='text-3xl mt-6 font-bold'>&#x2726;  Header components</span>
              <ul className='ms-10 ps-5 mt-6'>
                <li>
                  <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                    &#10170; The Header component typically contains elements that appear at the top of a web page or application layout. It often includes navigation menus, branding elements such as logos or titles, and sometimes user authentication controls or search bars.
                  </li>
                  <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                    <span className='text-2xl mt-6'>&#10170; Example Elements</span>
                    <ul className='font-bold ms-10 ps-5 mt-6'>
                      <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                        Logo or Branding
                      </li>
                      <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                        Navigation Menu
                      </li>
                      <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                        User Profile/Login Controls
                      </li>
                      <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                        Search Bar
                      </li>
                      <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                        Site Title or Page Title
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                    &#10170; The Header component is included in the main layout or template of the application. It provides consistent navigation and branding across different pages or views within the app.
                  </li>
                </li>
              </ul>
            </li>
            <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
              <span className='text-3xl mt-6 font-bold'>&#x2726;  Content Component</span>
              <ul className='ms-10 ps-5 mt-6'>
                <li>
                  <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                    &#10170; The Content component holds the main content or functional sections of a web page or application. It dynamically renders different types of content based on the user's interactions or the application's state.
                  </li>
                  <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                    <span className='text-2xl mt-6'>&#10170; Example Elements</span>
                    <ul className='font-bold ms-10 ps-5 mt-6'>
                      <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                        Main Content Area
                      </li>
                      <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                        Dynamic Components (e.g., Cards, Lists, Forms)
                      </li>
                      <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                        Page-specific Data Display
                      </li>
                      <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                        User-generated Content (e.g., Posts, Comments)
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item list-group-item-action fs-5 bg-transparent text-slate-300 hover:text-slate-400 border-0">
                    &#10170; The Content component is often the central part of the application layout. It can be divided into sub-components or sections based on the app's structure and functionality, making it versatile for displaying various types of content.
                  </li>
                </li>
              </ul>
            </li>
          </ol>

          <div className="flex justify-between my-10 ">
            <Link to="/question-5">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sky-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sky-400 text-2xl">
                  Previous
                </span>
              </button>
            </Link>
            <Link to="/question-7">
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
