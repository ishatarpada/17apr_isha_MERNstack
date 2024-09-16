import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data using Axios
    axios.get(`http://localhost:4000/products`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);
  return (
    <>
      <Header />

      <div className="shop container my-5">
        <h1 className='text-gray-800 font-bold text-5xl font-serif mb-5'>Popular Products</h1>
        <div className="flex rounded items-center justify-center flex-wrap container-fluid">
          {products.map((product) => (
            <div className="m-3 w-96" key={product.id}>
              <div className={`w-full max-w-sm bg-slate-50 border border-gray-200 rounded-lg shadow`}>
                <a href="#" className='flex justify-center items-center mt-3'>
                  <img className="rounded-full w-60 h-60 shadow" src={product.image} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className={`text-2xl text-center my-3 font-bold tracking-tight text-black`}>{product.productName}</h5>
                  </a>
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-truncate">{product.descriptions}</h5>
                  </a>
                  <div className="flex items-center my-2">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <div className="bi bi-star-fill text-yellow-300"></div>
                      <div className="bi bi-star-fill text-yellow-300"></div>
                      <div className="bi bi-star-fill text-yellow-300"></div>
                      <div className="bi bi-star-fill text-yellow-300"></div>
                      <div className="bi bi-star-half text-yellow-300"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 ">{product.price}</span>
                    <a href="#" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
