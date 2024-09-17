import { useSelector } from "react-redux"

export default function ProductDetails() {

  const {productSlice} = useSelector((res) => res)

  if(!productSlice){
    return (
      <h1 className="text-6xl font-bold text-center my-48">Data are Not available</h1>
    )
  }

  return (
    <>
      <div className="bg-gray-300 min-h-screen min-w-screen flex justify-center items-center font-serif">
        <div className="rounded p-12 shadow border w-6/12">
          <div className="flex justify-center items-center m-5">
            <img src={productSlice.image} alt="" className='h-36 w-36' />
          </div>
          <h1 className='font-bold text-2xl text-center mb-2'>
          {productSlice.title}
          </h1>
          <p className='font-medium text-md text-center mb-2 text-gray-700'>{productSlice.description}</p>
          <div className="flex justify-center items-center gap-5">
            <label className='bg-red-500 px-5 py-2 text-white rounded font-bold'>{productSlice.category}</label>
            <button className='bg-blue-500 px-5 py-2 text-white rounded font-bold'>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}