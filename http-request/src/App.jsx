import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAPI = () => {
    setLoading(true)
    fetch('https://fakestoreapi.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container mx-auto my-5 font-serif">
        <h1 className="mb-5 text-center text-3xl font-bold">HTTP Request</h1>
        <button
          className="bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-800"
          onClick={fetchAPI}
        >
          Fetch
        </button>
      </div>
      <div className="container mx-auto mt-5 font-serif">
        <h2 className="text-center text-2xl font-semibold mb-4">Category Cards</h2>
        {
          loading &&
          <div className="container mx-auto d-flex justify-content-center align-items-center my-5">
            <i className="fa fa-spinner fa-spin display-1"></i>
          </div>
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user, key) => (
            <div key={key} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
              <div className="mb-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user.name.firstname} {user.name.lastname}
                </h2>
                <p className="text-gray-700 dark:text-gray-400">@{user.username}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-gray-700 dark:text-gray-400">Email: {user.email}</p>
                <p className="text-gray-700 dark:text-gray-400">Phone: {user.phone}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Address
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {user.address.number} {user.address.street}, {user.address.city}, {user.address.zipcode}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  Geolocation: {user.address.geolocation.lat}, {user.address.geolocation.long}
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                User ID: {user.id} | Version: {user.__v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
