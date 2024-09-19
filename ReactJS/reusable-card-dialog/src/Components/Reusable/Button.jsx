export default function Button({ children, color, ...rest }) {
  let bgColor;

  switch (color) {
    case 'red':
      bgColor = 'bg-red-600';
      break;
    case 'blue':
      bgColor = 'bg-blue-600';
      break;
    case 'green':
      bgColor = 'bg-green-600';
      break;
    case 'yellow':
      bgColor = 'bg-yellow-600';
      break;
    case 'indigo':
      bgColor = 'bg-indigo-600';
      break;
    case 'white':
      bgColor = 'bg-white text-black';
      break;
    case 'black':
      bgColor = 'bg-gray-800';
      break;
    default:
      bgColor = 'bg-gray-600';
  }

  return (
    <>
      <button
        className={`${bgColor} text-white px-4 font-bold py-2 rounded shadow`}
        {...rest}
      >
        {children}
      </button>
    </>
  )
}
