import { useContext } from "react";
import context from "./Context";
import { Navigate } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'

export default function Details() {

  const { product } = useContext(context);

  if(!product)
    return <Navigate to={"/"} />

  return (
    <>
      <section className="py-12 sm:py-16 font-serif min-h-screen min-w-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16 shadow">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg flex justify-center">
                    <img
                      className="h-36 w-48 object-fill"
                      src={product.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold  sm:text-3xl">
                {product.title}
              </h1>
              <div className="mt-5 flex items-center">

                <div className="flex items-center">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  {product.rating.rate}
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">price :- {product.price}</h1>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-white bg-none px-12 py-3 text-center text-base font-bold text-gray-900 transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <a
                    href="#"
                    title=""
                    className="border-b-2 border-gray-900 py-4 text-sm font-medium  hover:border-gray-400 hover:text-gray-800"
                  >
                    {" "}
                    Description{" "}
                  </a>
                </nav>
              </div>
              <div className="mt-8 flow-root sm:mt-12">
                <p className="">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
