import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  return (
    <>
      <Header />

      <div className="blog-banner container rounded my-5">
        <div className="card text-bg-dark border-none h-64">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-2.png"
            className="card-img img-fluid h-64"
            alt="Blog Banner"
          />
          <div className="card-img-overlay">
            <h5 className="card-title text-5xl font-bold text-gray-700 m-5">Blog & News</h5>
          </div>
        </div>
      </div>

      <div className="blog-container container">
        <h1 className="d-flex justify-start items-center text-4xl font-bold text-gray-800 my-3">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
            alt="Blogs Icon"
            className="me-3 img-fluid"
          />
          Blogs
        </h1>

        <div className="row gap-5 my-5 justify-center items-center">
          {blogs.map(blog => (
            <div className="col-md-3" key={blog.id}>
              <div className="card border-none shadow">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
