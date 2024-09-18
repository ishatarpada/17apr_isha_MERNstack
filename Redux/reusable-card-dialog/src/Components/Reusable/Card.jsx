import React from 'react'

export default function Card({ title, price, image, category ,onViewDetails  }) {
  return (
    <>
      <div className="p-3 rounded-lg shadow bg-white my-12">
        <img src={image} alt={title} className='w-full object-cover h-72 mb-5 rounded shadow' />
        <span className='bg-blue-50 text-blue-500 font-semibold p-2 mb-5'>{category}</span>
        <h1 className='my-2 font-bold text-xl'>{title}</h1>
        <button
          className="py-2 px-4 border border-blue-600 rounded my-3 text-blue-500 font-bold bg-blue-50 mx-3"
          onClick={onViewDetails}
        >
          View Details
        </button>
        <button className='py-2 px-4 border border-blue-600 rounded my-3 text-blue-500 font-bold bg-blue-50'>price :- {price}</button>
      </div>
    </>
  )
}
