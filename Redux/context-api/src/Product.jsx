import { useEffect, useState, useContext } from 'react'
import context from './Context';
import { useNavigate } from 'react-router-dom';

export default function Product() {

  const navigate = useNavigate();

  const { setProduct } = useContext(context);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  const openProduct = (item) => {
    setProduct(item);
    navigate("/details")
  }


  return (
    <>
      <div className="bg-white min-h-screen flex justify-center items-center font-serif">
        <div className="bg-white rounded-lg p-8 w-[80%] text-center">
          <h1 className='text-6xl font-bold text-gray-900 mb-4'>Products</h1>
          <p className='text-md font-medium text-gray-900 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veritatis.</p>

          <div className="group my-10 flex flex-wrap justify-center items-center gap-5 contrast-more: mx-auto">
            {
              products.map((item, index) => (
                <div className="product border w-full max-w-xs border-gray-100 bg-white shadow-md overflow-hidden" key={index}>
                  <a className="relative flex h-60 overflow-hidden" href="#">
                    <img
                      className="absolute top-0 right-0 h-full w-full object-fill"
                      src={item.image}
                      alt="product image"
                    />
                  </a>
                  <div className="mt-4 px-5 pb-5">
                    <button to="/details" onClick={() => openProduct(item)}>
                      <h5 className="text-sm tracking-tight text-slate-900">
                        {item.title}
                      </h5>
                    </button>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-3xl font-bold text-slate-900">{item.price}</span>
                        <span className="text-sm text-slate-900 mx-3">{item.rating.rate}⭐</span>
                      </p>
                    </div>
                    <button className="flex items-center justify-center bg-gray-900 px-2 py-2 rounded text-sm text-white transition hover:bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </>
  )
}
