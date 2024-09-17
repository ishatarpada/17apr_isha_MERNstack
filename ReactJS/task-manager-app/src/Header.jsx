import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            {/* header */}
            <div className='container p-5 font-bold bg-black d-flex mb-5'>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3 text-4xl text-white ms-5 ps-5">
                        <Link to="/">
                            <i className="bi bi-ui-radios-grid me-3"></i>
                            Task Manager APP
                        </Link>
                    </div>
                    <div className="">
                        <Link to="/add-task">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Task
                                </span>
                            </button>
                        </Link>

                        <Link to="/manage-task">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Manage Task
                                </span>
                            </button>
                        </Link>






                    </div>
                </div>
            </div>

        </>

    )
}
