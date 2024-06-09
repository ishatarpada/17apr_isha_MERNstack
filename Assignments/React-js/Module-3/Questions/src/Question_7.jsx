import { Link } from 'react-router-dom'

export default function Question_7() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-2">
        <h1 className='text-3xl font-bold text-center text-white py-3'>7. How to install React Js on Windows, Linux Operating System? How to
        install NPM and How to check version of NPM?</h1>
        <hr className="text-white"></hr>

        <div className="container w-8/12 mx-auto mt-10 bg-transparent">
            {/* windows installtion */}
            <p className='text-2xl text-white'>
              <h1 className='mb-5 font-bold underline'>1.  Steps to Install React JS on Windows:</h1> 
              <ul className='ms-10'>
                <li>
                  <p className="mb-4">Step 1: Install Node.js installer for Windows</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 2: Verify Node.js installation:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>node -v <br /> npm -v</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 3: Install Create React App: </p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npm install -g create-react-app  </p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 4: Create a New React Application:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npx create-react-app my-app</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 5: Navigate into Your Application Directory:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>cd my-app </p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 6: Start the React Application:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npm start </p>
                </li>
              </ul>
              
            </p>
            <hr className='my-10'/>

            {/* linux installtion */}
            <p className='text-2xl text-white'>
              <h1 className='mb-5 font-bold underline'>2.  Steps to Install React JS on Linux:</h1> 
              <ul className='ms-10'>
                <li>
                  <p className="mb-4">Step 1: Install Node.js and npm:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>sudo apt install nodejs</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 2: Verify Node.js installation:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>node -v <br /> npm -v</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 3: Install Create React App: </p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>sudo npm install -g create-react-app  </p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 4: Create a New React Application:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npx create-react-app my-app</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 5: Navigate into Your Application Directory:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>cd my-app </p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 6: Start the React Application:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npm start </p>
                </li>
              </ul>
              
            </p>
            <hr className='my-10'/>

            {/* NPM installtion */}
            <p className='text-2xl text-white'>
              <h1 className='mb-5 font-bold underline'>3. Install NPM</h1> 
              <ul className='ms-10'>
                <li>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>sudo apt install npm <br />
                  npm install</p>
                </li>
              </ul>
            </p>
            <hr className='my-10'/>

            {/* NPM verion check*/}
            <p className='text-2xl text-white'>
              <h1 className='mb-5 font-bold underline'>3.Check version of NPM</h1> 
              <ul className='ms-10'>
                <li>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npm -v <br />
                  node -v</p>
                </li>
                
              </ul>
              
            </p>

          <div className="flex justify-between my-10 ">
            <Link to="/question-6">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sky-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sky-400 text-2xl">
                  Previous
                </span>
              </button>
            </Link>
            <Link to="/question-8">
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
