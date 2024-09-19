import useHttp from "../Hooks/useHttp"

export default function Home() {

  const { data, error, loader } = useHttp(`https://api.escuelajs.co/api/v1/products`);
  console.log(data);

  if (loader)
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen">
        <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="Loading..." className="h-48 w-48"/>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen">
        <h1 className="bg-red-50 text-red-500 p-5 text-center font-setif font-bold text-xl">{error.message}</h1>
      </div>
    );

  return (
    <>
      <section>
        <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl font-serif">
          <div className="px-4 py-8 md:px-6 md:py-12 lg:px-20">
            <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Our Best Selling Collection</h1>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              {
                data && data.map((product, index) => (
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden w-64" key={index}>
                    <img className="w-full h-48 object-cover" src={product.images[0]} alt={product.title} />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                      <p className="text-green-500 font-semibold text-xl mt-2">${product.price}</p>
                      <p className="text-gray-600 text-sm mt-2">{product.description.slice(0, 60)}...</p>
                      <p className="text-gray-500 text-xs mt-2">Category: {product.category.name}</p>
                    </div>
                  </article>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
