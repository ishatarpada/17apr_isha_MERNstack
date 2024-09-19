export default function Button({ children, color, ...rest }) {
  let colorClass = ''; // This will store the appropriate CSS class based on the color

  // The color cases should be strings or valid values.
  switch (color) {
    case 'danger':
      colorClass = 'bg-red-500 text-white';
      break;
    case 'error':
      colorClass = 'bg-rose-500 text-white';
      break;
    case 'indigo':
      colorClass = 'bg-indigo-500 text-white';
      break;
    case 'pink':
      colorClass = 'bg-pink-500 text-white';
      break;
    case 'green':
      colorClass = 'bg-green-500 text-white';
      break;
    case 'white':
      colorClass = 'bg-white text-black';
      break;
    case 'blue':
      colorClass = 'bg-blue-500 text-white';
      break;
    case 'warning':
      colorClass = 'bg-orange-500 text-white';
      break;
    case 'yellow':
      colorClass = 'bg-yellow-500 text-white';
      break;
    case 'info':
      colorClass = 'bg-blue-300 text-black';
      break;
    case 'violate':
      colorClass = 'bg-purple-500 text-white';
      break;
    case 'primary':
      colorClass = 'bg-blue-600 text-white';
      break;
    default:
      colorClass = 'bg-gray-800 text-white';
  }

  return (
    <>
      <button className={`font-bold font-serif px-5 py-2 rounded border shadow ${colorClass}`} {...rest}>
        {children}
      </button>
    </>
  );
}
