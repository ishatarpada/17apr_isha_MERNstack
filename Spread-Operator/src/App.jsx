import { useState } from "react";

export default function App() {
  // Define two arrays with initial names
  const arr1 = [" isha ", " disha ", " manshi "];
  const arr2 = [" harshi ", " devu "];

  // Combine arr1 and arr2 into a nested array (array of arrays)
  const array = [arr1, arr2];

  // Spread arr1 and arr2 into a single array
  const arr = [...arr1, ...arr2];

  // Log the nested array (array of arrays) and the spread array (flattened)
  console.log("array", array); // Outputs: [[" isha ", " disha ", " manshi "], [" harshi ", " devu "]]
  console.log("spread array", arr); // Outputs: [" isha ", " disha ", " manshi ", " harshi ", " devu "]

  // State for the input value and the dynamic list
  const [list, setList] = useState("");
  const [data, setData] = useState([]);

  // Function to update the list state as the user types
  const takeName = (e) => {
    e.preventDefault();
    setList(e.target.value);
  };

  // Function to add the current input value to the data array
  const addProduct = () => {
    if (list.trim() === "") {
      alert("Product field required");
    } else {
      setData([...data, list]); // Spread the existing data and add the new list item
    }
  };

  const editProduct = (index) => {
    alert(index);
  };

  const deleteProduct = (index) => {
    const productArr = [...data];
    productArr.splice(index, 1);
    console.log(productArr);
    setData(productArr);
  };

  return (
    <>
      <h1 className="text-center pt-5 pb-3 fw-bold">Dynamic List (Using Spread Operator)</h1>
      <hr className="w-75 mx-auto"></hr>

      <div className="d-flex justify-content-center align-items-center">
        {/* Input field to take product name */}
        <input
          type="text"
          className="form-control w-50"
          placeholder="enter product name ..."
          onChange={takeName} // Update list state on input change
        />
        {/* Button to add the product to the list */}
        <button
          className="btn btn-warning fw-bold py-1 text-light fs-4 ms-3 px-5"
          onClick={addProduct} // Add product to data array on click
        >
          ADD
        </button>
      </div>
      <hr className="w-75 mx-auto"></hr>

      {/* Display the list of products */}
      <h1 className="text-center">Products</h1>
      <ul className="list-group w-50 mx-auto">
        {data.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <div className="d-flex gap-3">
              <button
                className="btn btn-success" onClick={() => { editProduct(index) }}>
                Edit
              </button>
              <button
                className="btn btn-danger" onClick={() => { deleteProduct(index) }}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
