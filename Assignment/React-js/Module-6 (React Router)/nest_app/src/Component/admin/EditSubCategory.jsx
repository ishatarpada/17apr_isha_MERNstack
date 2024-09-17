/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import Sidebar from './Sidebar';
import Navbar from './Navbar';


export default function EditSubCategory() {
  //add blogs via admin 
  const [categories, setCategories] = useState([]);
  const category = useRef("");
  const subCategoryName = useRef("");
  const descriptions = useRef("");
  const image = useRef("");
  const date = useRef("date");

  const { id } = useParams();
  const Navigate = useNavigate("");

  // edit contact data
  useEffect(() => {
    axios.get(`http://localhost:4000/sub-category/${id}`).then((response) => {

      category.current.value = response.data.category;
      subCategoryName.current.value = response.data.subCategoryName;
      descriptions.current.value = response.data.descriptions;
      image.current.value = response.data.image;
      date.current.value = response.data.date;
    })

  }, []);

  // Fetch categories when component mounts
  useEffect(() => {
    axios.get(`http://localhost:4000/category`)
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching category data:', error));
  }, []);

  // add form Handeler events methods 
  const addSubCategoryFormHandler = (e) => {
    e.preventDefault();
    var update = {
      category: category.current.value,
      subCategoryName: subCategoryName.current.value,
      descriptions: descriptions.current.value,
      image: image.current.value,
      date: date.current.value
    }

    // add a post method using axios 
    axios.put(`http://localhost:4000/sub-category/${id}`, update).then(() => {
      // pass a message for added data
      Swal.fire({
        title: "Thanks",
        text: "Thanks your subcategory updated  successfully",
        icon: "success"
      });

      Navigate('/add-sub-category');
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
            <h2 className="text-center mb-4 font-bold text-5xl my-5 text-green-950 hover:text-green-500">Add SubCategory</h2>
          </div>
          <form onSubmit={addSubCategoryFormHandler}>
            <div className="row">
              <div className="mb-3 col-md-10 mx-auto">
                <label htmlFor="parentCategory" className="form-label text-2xl font-medium">Parent Category</label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex p-3.5 pointer-events-none">
                    <i className="bi bi-list-check font-bold text-gray-900"></i>
                  </div>
                  <select id="parentCategory" name="parentCategory" className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" ref={category} required>
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.categoryName}>{category.categoryName}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-3 col-md-10 mx-auto">
                <label htmlFor="subCategoryName" className="form-label text-2xl font-medium">
                  SubCategory Name
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <i className="bi bi-backpack4 font-bold text-gray-900"></i>
                  </div>
                  <input
                    type="text"
                    id="subCategoryName"
                    name="subCategoryName"
                    ref={subCategoryName}
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder='SubCategory name'
                    required
                  />
                </div>
              </div>
              <div className="mb-3 col-md-10 mx-auto">
                <label htmlFor="description" className="form-label text-2xl font-medium">
                  Description
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex p-3.5 pointer-events-none">
                    <i className="bi bi-file-text font-bold text-gray-900"></i>
                  </div>
                  <textarea
                    id="description"
                    name="description"
                    ref={descriptions}
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder='Description'
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
                    placeholder='Image URL'
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
              <div className="mb-3 col-md-10 mx-auto">
                <button type="submit" className="btn btn-success btn-lg">Update SubCategory</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
