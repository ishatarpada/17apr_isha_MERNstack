
export default function List() {
  return (
    <>
      <div className="container w-5/12 mx-auto">
        <ul className='text-xl font-bold text-white'>
          <li className='my-3'>
            <p className='w-full p-2 text-xl font-normal text-black bg-white rounded ms-5'> USe Array.map</p>
          </li>
          <li className='my-3'>
            <p className='w-full p-2 text-xl font-normal text-black bg-white rounded ms-5'> USe Array.mapNot for a loop</p>
          </li>
          <li className='my-3'>
            <p className='w-full p-2 text-xl font-normal text-black bg-white rounded ms-5'>Give each item a unique key</p>
          </li>
          <li className='my-3'>
            <p className='w-full p-2 text-xl font-normal text-black bg-white rounded ms-5'>Avoid using  array index as the key</p>
          </li>
        </ul>
      </div>

    </>
  )
}
