export default function ModelData({ open, image , onClose }) {

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center z-50">
        <div className="relative">
          <button
            className="absolute top-2 right-2 text-white font-bold text-3xl"
            onClick={onClose}
          >
            &times;
          </button>
          <img src={image} alt="" className="h-96 w-96 object-cover rounded-lg" />
        </div>
      </div>
    </>
  );
}