/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function AddProduct() {
  // State to hold fetched categories and subcategories
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const category = useRef("");
  const subCategory = useRef("");
  const productName = useRef("");
  const descriptions = useRef("");
  const shopkeeper = useRef("");
  const price = useRef("");
  const quantity = useRef("");
  const image = useRef("");
  const date = useRef("date");

  const navigate = useNavigate();

  // Fetch categories when component mounts
  useEffect(() => {
    axios.get('http://localhost:4000/category')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching category data:', error));
  }, []);

  // Fetch subcategories when the selected category changes
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    if (selectedCategory) {
      axios.get(`http://localhost:4000/sub-category?category=${selectedCategory}`)
        .then(response => setSubCategories(response.data))
        .catch(error => console.error('Error fetching sub-category data:', error));
    } else {
      setSubCategories([]);
    }
  };

  // Add product form handler
  const AddProductsFormHandler = (e) => {
    e.preventDefault();
    const insert = {
      category: category.current.value,
      subCategory: subCategory.current.value,
      productName: productName.current.value,
      descriptions: descriptions.current.value,
      shopkeeper: shopkeeper.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
      image: image.current.value,
      date: date.current.value
    };

    // Add a post method using axios
    axios.post(`http://localhost:4000/products`, insert).then(() => {
      // Show a success message
      Swal.fire({
        title: "Thanks",
        text: "Your product has been added successfully",
        icon: "success"
      });

      navigate('/add-Products');
    });

    e.target.reset();
  };

  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="container overflow-hidden">
          <Navbar />

          <div className="d-flex justify-center items-center">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/035/860/230/small_2x/groceries-set-grocery-store-collection-supermarket-fresh-organic-food-and-drinks-milk-vegetables-meat-chicken-cheese-sausages-wine-fruits-fish-cereal-juice-illustration-flat-style-vector.jpg" alt="" className='h-24 w-24 rounded-full me-3' />
            <h2 className="text-center mb-4 font-bold text-5xl my-5 text-green-600 hover:text-green-500">Add Food Product</h2>
          </div>
          <form onSubmit={AddProductsFormHandler}>
            <div className="row">
              <div className="mb-5 col-md-10 mx-auto">
                <label htmlFor="category" className="form-label text-2xl font-medium">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  value={selectedCategory}
                  ref={category}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.categoryName}>{category.categoryName}</option>
                  ))}
                </select>
              </div>
              <div className="mb-5 col-md-10 mx-auto">
                <label htmlFor="subCategory" className="form-label text-2xl font-medium">
                  Sub Category
                </label>
                <select
                  id="subCategory"
                  name="subCategory"
                  className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  value={selectedSubCategory}
                  ref={subCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                  required
                >
                  <option value="">Select Sub Category</option>
                  {subCategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.subCategoryName}>{subcategory.subCategoryName}</option>
                  ))}
                </select>
              </div>
              <div className="mb-5 col-md-10 mx-auto">
                <label htmlFor="productName" className="form-label text-2xl font-medium">
                  Product Name
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <i className="bi bi-backpack4 font-bold text-gray-900"></i>
                  </div>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    ref={productName}
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder='Product name'
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
                    type="text"
                    id="description"
                    name="description"
                    ref={descriptions}
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder='Description'
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-3 col-md-10 mx-auto">
                <label htmlFor="Shop" className="font-semibold fs-4 mb-2">Shop</label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <i className="bi bi-person font-bold text-gray-900"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    id="Shop"
                    name="Shop"
                    ref={shopkeeper}
                    placeholder="Enter Shop name"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 col-md-10 mx-auto">
                <label htmlFor="price" className="form-label text-2xl font-medium">
                  Price
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex p-3.5 pointer-events-none">
                    <i className="bi bi-coin font-bold text-gray-900"></i>
                  </div>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    ref={price}
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder='Price'
                    required
                  />
                </div>
              </div>
              <div className="mb-3 col-md-10 mx-auto">
                <label htmlFor="quantity" className="form-label text-2xl font-medium">
                  Quantity
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex p-3.5 pointer-events-none">
                    <i className="bi bi-123 font-bold text-gray-900"></i>
                  </div>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    ref={quantity}
                    className="form-control bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder='1'
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
                <div className="col-md-10">
                  <button type="submit" className="btn btn-success btn-lg">Add Product</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
