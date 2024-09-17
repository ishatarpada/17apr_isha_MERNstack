import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, updateCustomer } from "../redux/Slice/customerSlice";

export default function ShowData() {
  const customer = useSelector(state => state.customer);
  const dispatch = useDispatch();

  const editData = (index) => {
    const updatedCustomer = {
      id: customer[index].id, // Assuming each customer has a unique `id`
      customerName: prompt("Enter new customer name", customer[index].customerName),
      product: prompt("Enter new product", customer[index].product),
      price: prompt("Enter new price", customer[index].price),
      discount: prompt("Enter new discount", customer[index].discount),
    };

    dispatch(updateCustomer(updatedCustomer));
  };

  const deleteData = (index) => {
    dispatch(deleteCustomer(index))
  }

  return (
    <>
      <div className="bg-gray-900 min-h-screen py-16 font-serif">
        <div className="bg-white rounded-lg shadow-lg w-8/12 mx-auto p-16">
          <div className="flex justify-between items-center">
            <h1 className='text-4xl font-bold text-gray-900'>Redux Crud App</h1>
            <Link to="/add-user" className='text-white bg-indigo-800 px-6 py-2 rounded-md'>
              <i className="ri-user-add-line mx-2 text-white"></i>
              Add New User
            </Link>
          </div>
        </div>
        <div className="bg-gray-800 my-10 container mx-auto">
          <table className="w-full">
            <thead>
              <tr className='text-white'>
                <th className='p-4'>S/No</th>
                <th className='p-4'>Customer Name</th>
                <th className='p-4'>Product</th>
                <th className='p-4'>Price</th>
                <th className='p-4'>Discount</th>
                <th className='p-4'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                customer.map((item, index) => (
                  <tr key={index} className={`text-center ${index % 2 === 0 ? "bg-white" : " bg-indigo-50"}`}>
                    <td className='p-4'>{index + 1}</td>
                    <td className='p-4'>{item.customerName}</td>
                    <td className='p-4'>{item.product}</td>
                    <td className='p-4'>{item.price}</td>
                    <td className='p-4'>{item.discount}</td>
                    <td className='p-4 flex justify-center items-center gap-2'>
                      <button className='bg-green-500' onClick={() => editData(index)}>
                        <i className="ri-edit-circle-fill text-white p-1 text-xl"></i>
                      </button>
                      <button className='bg-red-500' onClick={() => deleteData(index)}>
                        <i className="ri-delete-bin-6-fill text-white p-1 text-xl"></i>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
