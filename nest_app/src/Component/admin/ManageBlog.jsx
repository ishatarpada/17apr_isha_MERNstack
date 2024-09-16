import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar"
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'

export default function ManageBlog() {
  const [blogs, setBlogs] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    // Fetch blog data using Axios
    axios.get(`http://localhost:4000/blogs`)
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);
  return (
    <>

      <div className="flex">
        <Sidebar />

        <div className="blog-container container">
          <Navbar />
          <h1 className="d-flex justify-start items-center text-4xl font-bold text-gray-800 my-5">
            <img
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
              alt="Blogs Icon"
              className="me-3 img-fluid"
            />
            Blogs
          </h1>

          <div className="row gap-5 my-5 justify-center items-center">
            {blogs.map(blog => (
              <div className="col-md-3 shadow p-2" key={blog.id}>
                <div className="card border-none">
                  <img
                    src={blog.image}
                    className="card-img-top img-fluid rounded"
                    alt={blog.title}
                  />
                  <div className="card-body mt-2">
                    <h5 className="card-title text-center text-gray-700 font-semibold">{blog.title}</h5>
                    <p className="card-text text-center text-gray-800 font-medium text-2xl">
                      {blog.descriptions}
                    </p>
                    <ul className="flex justify-center items-center mt-2">
                      <li className="mx-2 text-gray-600">{blog.date}</li>
                      <li className="mx-2 text-gray-600">{blog.tags}</li>
                      <li className="mx-2 text-gray-600">{blog.author}</li>
                    </ul>
                    <div className='d-flex justify-center align-items-center'>
                      <button onClick={() => Navigate(`/edit-blog/${blog.id}`)} className='bg-green-500 btn-lg p-3 m-2 rounded text-2xl text-white font-bold font-serif bi bi-pencil'></button>
                      <button onClick={() => Navigate(`/delete-blog/${blog.id}`)} className='bg-yellow-500 btn-lg p-3 m-2 rounded text-2xl text-white font-bold font-serif bi bi-trash'></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}
