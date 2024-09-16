import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function ManageTask() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/task').then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <>
            <Header />

            <div className="flex justify-center items-center">
                {data && data.map((item) => (
                    <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 p-5">
                        <div className="flex flex-col items-center">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.image} alt="Profile" />
                            <h5 className="mb-1 text-xl font-bold font-serif text-gray-900 dark:text-white">{item.taskName}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400 px-5 text-center font-medium mb-3">{item.description}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                            <div className="flex mt-4 md:mt-6">
                                <button
                                    type="button"
                                    onClick={() => navigate(`/edit-task/${item.id}`)}
                                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2"
                                >
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate(`/delete-task/${item.id}`)}
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2"
                                >
                                    <i className="bi bi-trash3-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
