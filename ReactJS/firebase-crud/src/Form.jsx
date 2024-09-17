import { useEffect, useState } from 'react'
import FirebaseAppConfig from "./utils/FirebaseAppConfig"
import { getFirestore, addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'

const db = getFirestore(FirebaseAppConfig);


export default function Form() {

  const model = {
    'name': '',
    'salary': '',
    'joining_date': ''
  }

  const [employee, setEmployee] = useState(model)
  const [isEmpty, setIsEmpty] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const req = async () => {
      const snapshot = await getDocs(collection(db, "employees"));
      setIsEmpty(snapshot.empty);
      let temp = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        data.uid = doc.id;
        temp.push(data);
        console.log(data);
      })
      setEmployeeData(temp)
    }
    req();
  }, [isEmpty, isUpdated])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    })
  }

  const createEmployee = async (e) => {
    try {
      e.preventDefault();
      const snapshot = await addDoc(collection(db, "employees"), employee);
      setIsEmpty(false);
      setIsUpdated(!isUpdated)
      console.log(snapshot);
      alert("data is store successfully");
    } catch (error) {
      console.log(error);
    }
    finally {
      setEmployee(model)
    }
  }

  const deleteEmployee = async (id) => {
    const ref = doc(db, "employees", id);
    await deleteDoc(ref);
    setIsUpdated(!isUpdated);
  }

  const editEmployee = async (data) => {
    console.log(data);
    setEdit(data);
    setEmployee(data);
  }

  const saveEmployee = async (e) => {
    e.preventDefault();
    const ref = doc(db , "employees" , edit.uid)
    await updateDoc(ref , employee);
    setIsUpdated(!isUpdated);
  }


  return (
    <>
      <div className="bg-white p-8 my-5 mx-auto font-serif w-[75%]">
        <h1 className='text-center m-5 text-5xl font-bold text-indigo-600'>CRUD</h1>
        <form onSubmit={edit ? saveEmployee : createEmployee} className="space-y-4 border shadow rounded p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Employee Form</h2>
          <div>
            <label
              htmlFor="name"
              className="block text-md font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={employee.name}
              className="mt-1 p-3 border w-96 block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="salary"
              className="block text-md font-bold text-gray-700"
            >
              Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              step="0.01"
              className="mt-1 p-3 border w-96 block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="joining_date"
              className="block text-md font-bold text-gray-700"
            >
              Joining Date
            </label>
            <input
              type="date"
              id="joining_date"
              name="joining_date"
              value={employee.joining_date}
              onChange={handleChange}
              className="mt-1 p-3 border w-96 block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
              required=""
            />
          </div>
          <div className="flex justify-end gap-3">
            {
              edit ?
                <button
                  type="submit"
                  className="bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Save
                </button>
                :
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
            }
          </div>
        </form>
      </div>
      {
        isEmpty ?
          <div id="noDataAlert" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-8 mx-auto max-w-md" role="alert">
            <p className="font-bold">No Data</p>
            <p>No data is here. Please add some records.</p>
          </div> :
          <div className="bg-white mt-8 p-8 font-serif w-[75%] mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Employee Data</h2>
            <table className="min-w-full divide-y divide-gray-200 table-auto shadow rounded">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody id="employeeTable" className="bg-white divide-y divide-gray-200 capitalize">
                {
                  employeeData.map((data, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.salary}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.joining_date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex justify-center items-center gap-3">
                        <button className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white hover:bg-green-700"
                          onClick={() => editEmployee(data)}>
                          <i className="ri-edit-2-fill text-2xl"></i>
                        </button>
                        <button className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-600 text-white hover:bg-rose-700"
                          onClick={() => deleteEmployee(data.uid)}
                        >
                          <i className="ri-chat-delete-fill text-2xl"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div >
      }
    </>

  )
}
