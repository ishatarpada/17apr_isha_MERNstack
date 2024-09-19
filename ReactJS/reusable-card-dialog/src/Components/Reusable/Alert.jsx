import thankYou from "../../assets/thank.svg";
import error from "../../assets/error.svg"
import Button from "../Reusable/Button"

export default function Alert({ open, onClose, type }) {
  // Set dynamic colors based on the alert type
  const backgroundColor = type === "success" ? "bg-indigo-500" : "bg-red-500";
  const image = type === "success" ? thankYou : error;
  const textColor = type === "success" ? "text-indigo-500" : "text-red-500";

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-800 font-bold text-2xl focus:outline-none"
              onClick={onClose}
            >
              &times;
            </button>

            {/* Image Section */}
            <div className="bg-white flex justify-center p-12">
              <img src={image} alt={type === "success" ? "Thank You" : "Error"} className="w-72 h-56 object-contain" />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center px-6 py-5 bg-white">
              <h2 className={`text-3xl font-bold mb-2 sm:text-4xl ${textColor}`}>
                {type === "success" ? "Thank You!" : "Error!"}
              </h2>
              <p className="font-medium text-gray-500 mb-6 text-center">
                {type === "success"
                  ? "For supporting me with your donation."
                  : "Something went wrong. Please try again."}
              </p>

              {/* Donor/Info Section */}
              {
                type === "success" &&
                  <>
                    <div className={`flex justify-start items-center ${backgroundColor} text-white py-4 px-24 rounded-lg`}>
                      <Button color="white">
                        <a href="/products"> Show All Product</a>
                      </Button>
                    </div>
                  </> 
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
}