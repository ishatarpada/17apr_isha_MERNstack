import { useState } from 'react'
import ModelData from './ModelData'

export default function Card({ title, price, image, category, onViewDetails }) {

  const [open, setOpen] = useState(false);


  const modelOpen = () => {
    setOpen(true);
  }

  const modelClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="p-3 rounded-lg shadow bg-white my-12 w-[350px]">
        <button className='block mb-5 w-full' onClick={modelOpen}>
          <img src={image} alt={title} className='object-cover mb-5 rounded w-full shadow' />
        </button>
        <span className='block bg-blue-50 text-blue-500 font-semibold p-2 mb-3 text-center'>{category}</span>
        <h1 className='my-2 font-bold text-md text-center'>{title}</h1>
        <div className="flex gap-2">
          <button
            className="w-full py-2 px-4 border border-blue-600 rounded my-3 text-blue-500 font-bold bg-blue-50"
            onClick={onViewDetails}
          >
            View Details
          </button>
          <button className='w-full py-2 px-4 border border-blue-600 rounded my-3 text-blue-500 font-bold bg-blue-50'>
            Price: {price}
          </button>
        </div>
      </div>


      <ModelData image={image} open={open} onClose={modelClose} />
    </>
  )
}
