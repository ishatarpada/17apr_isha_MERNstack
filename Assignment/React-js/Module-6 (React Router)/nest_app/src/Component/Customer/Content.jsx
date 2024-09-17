import React, { useEffect, useState } from 'react';
import axios from 'axios';
import banner1 from '../../assets/Image/banner-1.png'
import banner2 from '../../assets/Image/banner-2.png'
import banner3 from '../../assets/Image/banner-3.png'

export default function MainContent() {
    const [categories, setCategories] = useState([]);

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
        <div>
            <div className="container-fluid px-5 my-10">
                <h1 className='text-3xl font-bold'>Featured Categories</h1>

                <div className="d-flex gap-2 mt-5 items-center fruits-category mx-auto overflow-auto">
                    {categories.map((category, index) => (
                        <div key={category.id} className={`w-96 rounded-lg p-4 border-2 hover:shadow-lg hover:border-pink-500 ${colors[index % colors.length]}`}>
                            <a href="#" className="d-flex justify-center align-items-center">
                                <img className="rounded-full h-36 w-36" src={category.image} alt={category.categoryName} />
                            </a>
                            <div className="px-5 text-center">
                                <a href="#">
                                    <h5 className="text-xl font-bold tracking-tight text-nowrap text-center hover:text-pink-600">{category.categoryName}</h5>
                                    <span className="text-nowrap">72 items</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative row px-5 my-10">
                <div className="relative col-lg-4 my-2">
                    <div className="card text-bg-dark border-0">
                        <img src={banner1} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title px-10 pt-5 text-2xl font-bold text-black animate-bounce lg:text-2xl md:text-sm">Everyday Fresh & Clean with Our Products</h5>
                            <a href="#" className="btn btn-lg bg-green-500 hover:bg-yellow-500 text-white mx-10">Show More</a>
                        </div>
                    </div>
                </div>
                <div className="relative col-lg-4 my-2">
                    <div className="card text-bg-dark border-0">
                        <img src={banner2} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title px-10 pt-5 text-2xl font-bold text-black lg:pt-0 animate-bounce lg:text-2xl md:text-sm">Make your Breakfast Healthy and <br></br>Easy</h5>
                            <a href="#" className="btn btn-lg bg-green-500 hover:bg-yellow-500 text-white mx-10">Show More</a>
                        </div>
                    </div>
                </div>
                <div className="relative col-lg-4 my-2">
                    <div className="card text-bg-dark border-0">
                        <img src={banner3} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title px-10 pt-5 text-2xl font-bold text-black animate-bounce lg:text-2xl md:text-sm">The best Organic Products Online</h5>
                            <a href="#" className="btn btn-lg bg-green-500 hover:bg-yellow-500 text-white mx-10">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}