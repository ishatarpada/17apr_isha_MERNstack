import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import {FcPlanner} from "react-icons/fc";

export default function Blog() {
  const title = useRef("");
  const descriptions = useRef("");
  const author = useRef("");
  const category = useRef("");
  const tags = useRef("");
  const image = useRef("");
  const date = useRef("");

  const navigate = useNavigate();

  const addBlogFormHandler = (e) => {
    e.preventDefault();
    
    const newBlog = {
      title: title.current.value,
      descriptions: descriptions.current.value,
      author: author.current.value,
      category: category.current.value,
      tags: tags.current.value,
      image: image.current.value,
      date: date.current.value
    };

    axios.post('http://localhost:4000/blogs', newBlog)
      .then(() => {
        Swal.fire({
          title: "Thanks",
          text: "Your blog has been added successfully",
          icon: "success"
        });
        navigate('/add-blog');
      })
      .catch(error => {
        Swal.fire({
          title: "Error",
          text: "There was an error adding your blog",
          icon: "error"
        });
        console.error("There was an error adding the blog!", error);
      });

    e.target.reset();
  };

  return (
    <div className="container">
      <Navbar />
      <h2 className="text-center display-4 hover:text-green-600 font-bold text-green-700 my-5 flex justify-center items-center"><FcPlanner /> Add Blog Post</h2>
      <form onSubmit={addBlogFormHandler} encType='multipart/form-data' className="shadow p-5">
        <div className="form-group">
          <label htmlFor="title" className="font-semibold fs-4 mb-2">Blog Title</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="bi bi-card-heading font-bold text-gray-900"></i>
            </div>
            <input
              type="text"
              id="title"
              name="title"
              ref={title}
              className="bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="Blog Title"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="font-semibold fs-4 mb-2">Blog Content</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex pt-3 ps-3.5 pointer-events-none">
              <i className="bi bi-file-text font-bold text-gray-900"></i>
            </div>
            <textarea
              className="bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              id="content"
              name="content"
              ref={descriptions}
              rows="5"
              placeholder="Enter blog content"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="author" className="font-semibold fs-4 mb-2">Author</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="bi bi-person font-bold text-gray-900"></i>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              id="author"
              name="author"
              ref={author}
              placeholder="Enter author name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="font-semibold fs-4 mb-2">Category</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="bi bi-tags font-bold text-gray-900"></i>
            </div>
            <select
              className="bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              id="category"
              name="category"
              ref={category}
              required
            >
              <option value="">Select category</option>
              <option value="news">News</option>
              <option value="recipes">Recipes</option>
              <option value="tips">Tips</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="tags" className="font-semibold fs-4 mb-2">Tags</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="bi bi-tag font-bold text-gray-900"></i>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              id="tags"
              name="tags"
              ref={tags}
              placeholder="Enter tags (comma-separated)"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image" className="font-semibold fs-4 mb-2">Blog Image</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="bi bi-image font-bold text-gray-900"></i>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              id="image"
              name="image"
              ref={image}
              placeholder="Enter image URL"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="date" className="font-semibold fs-4 mb-2">Date</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="bi bi-calendar-date font-bold text-gray-900"></i>
            </div>
            <input
              type="date"
              id="date"
              name="date"
              ref={date}
              className="bg-gray-50 border border-gray-300 text-black text-xl font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success btn-lg px-6">
          Submit
        </button>
      </form>
    </div>
  );
}
