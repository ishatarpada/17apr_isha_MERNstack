export default function Modal({ isVisible, onClose, product }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-end items-center">
          <button className="text-right text-red-500 text-xl bg-rose-100 mb-5 px-2 rounded" onClick={onClose}>
            &times;
          </button>
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <span className="bg-blue-50 text-blue-500 font-semibold p-2 mb-5 block">
          {product.category}
        </span>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-blue-600 font-bold text-xl">${product.price}</p>
      </div>
    </div>
  );
}
