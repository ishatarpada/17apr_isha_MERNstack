export default function Alert({ children, open, type, onClose }) {
  if (!open) return null;

  if (type === "success") {
    return (
      <div className="bg-green-50 text-green-500 py-2 px-5 my-3 font-semibold font-serif text-xl flex justify-between items-center">
        {children}
        <button onClick={onClose}>x</button>
      </div>
    );
  }

  if (type === "error") {
    return (
      <div className="bg-rose-50 text-red-500 py-2 px-5 my-3 font-medium font-serif text-xl flex justify-between items-center">
        {children}
        <button onClick={onClose}>x</button>
      </div>
    );
  }

  return null;
}
