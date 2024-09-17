/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Sidebar from './Sidebar';
import Navbar from './Navbar';


export default function AddCategory() {
  //add blogs via admin 
  const [data, setData] = useState();
  const categoryName = useRef("");
  const image = useRef("");
  const date = useRef("date");

  const Navigate = useNavigate();

  // add form Handeler events methods 
  const AddCategoryFormHandler = (e) => {
    e.preventDefault();
    var insert = {
      categoryName: categoryName.current.value,
      image: image.current.value,
      date: date.current.value
    }

    // add a post method using axios 
    axios.post(`http://localhost:4000/category`, insert).then(() => {
      // pass a message for added data
      Swal.fire({
        title: "Thanks",
        text: "Thanks your category added  successfully",
        icon: "success"
      });

      Navigate('/add-category');
    })

    e.target.reset();
  }


  return (
    <>

      <div className="flex">
        <Sidebar />

        <div className="container overflow-hidden">
          <Navbar />

          <div className="d-flex justify-center items-center">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/035/860/230/small_2x/groceries-set-grocery-store-collection-supermarket-fresh-organic-food-and-drinks-milk-vegetables-meat-chicken-cheese-sausages-wine-fruits-fish-cereal-juice-illustration-flat-style-vector.jpg" alt="" className='h-24 w-24 rounded-full me-3' />
            <h2 className="text-center mb-4 font-bold text-5xl my-5 text-green-950 hover:text-green-500">Add Category</h2>
          </div>
          <form onSubmit={AddCategoryFormHandler} className='container'>
            <div className="row container">
              <div className="mb-3 col-md-10 mx-auto">
                <label htmlFor="categoryName" className="form-label text-2xl font-medium">
                  category Name
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <i className="bi bi-backpack4 font-bold text-gray-900"></i>
                  </div>
                  <input
                    type="text"
                    id="categoryName"
                    name="categoryName"
                    ref={categoryName}
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder='category name'
                    required
                  />
                </div>
              </div>
              <div className="mb-3 col-md-10 mx-auto">
                <label htmlFor="imageUrl" className="form-label text-2xl font-medium">
                  Image URL
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex p-3.5 pointer-events-none">
                    <i className="bi bi-image font-bold text-gray-900"></i>
                  </div>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    ref={image}
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder='image'
                    required
                  />
                </div>
              </div>
              <div className="mb-3 col-md-10 mx-auto">
                <label htmlFor="date" className="form-label text-2xl font-medium">
                  Date
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex p-3.5 pointer-events-none">
                    <i className="bi bi-calendar-date font-bold text-gray-900"></i>
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    ref={date}
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder="Date"
                    required
                  />
                </div>
              </div>

              <div className="mx-auto col-md-10">
                <button type="submit" className="btn btn-success btn-lg w-25 mx-auto">Add category</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
