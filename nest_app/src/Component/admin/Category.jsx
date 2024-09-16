import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { FcEditImage , FcFullTrash } from "react-icons/fc";


export default function SubCategory() {
  const [categories, setCategories] = useState([]);
  const Navigate = useNavigate();

  const colors = [
    'bg-red-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-purple-100',
    'bg-indigo-100',
    'bg-pink-100',
    'bg-orange-100'
  ];



  useEffect(() => {
    // Fetch category data using Axios
    axios.get('http://localhost:4000/category')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching category data:', error));
  }, []);

  return (
    <>
      <div className="flex h-100vh">
        <Sidebar />

        <div className="category container-fluid overflow-hidden">
          <Navbar />
          <h1 className="font-bold text-5xl my-5 text-center text-green-800">Popular category</h1>
          <div className="flex flex-wrap gap-4 mt-5 justify-center items-center fruits-category mx-auto">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`${colors[index % colors.length]} border border-gray-200 rounded-lg shadow`}
              >
                <div className="flex flex-col items-center p-10">
                  <img className="w-36 h-36 mb-3 rounded-full shadow-lg" src={category.image} alt={category.categoryName} />
                  <h5 className="mb-1 text-xl font-medium text-gray-900">{category.categoryName}</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">72 Items</span>
                  <div className="flex mt-4 md:mt-6">
                    <button onClick={() => Navigate(`/delete-category/${category.id}`)} type='button' className={`bg-gradient-to-r from-red-400 via-red-500 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 py-2 px-4 ms-2  font-medium text-white text-xl flex justify-center items-center rounded`}><FcFullTrash /><span className='ms-2'>Delete</span></button>
                    <button onClick={() => Navigate(`/edit-category/${category.id}`)} type="button" className="py-2 px-4 ms-2  font-medium text-white text-xl flex justify-center items-center bg-gradient-to-r from-lime-400 via-lime-500 to-lime-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded "><FcEditImage /><span className='ms-2'>Edit</span></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
