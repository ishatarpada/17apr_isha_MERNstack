import { useState } from 'react';
import { Link } from 'react-router-dom';
import iceCream from '../src/assets/icecream.jpg';
import shake from '../src/assets/shake.jpg';

export default function Question_1() {
  const [quantityIceCream, setQuantityIceCream] = useState(1); // State for ice cream quantity
  const [subtotalIceCream, setSubtotalIceCream] = useState(30); // Initial subtotal for ice cream

  const [quantityShake, setQuantityShake] = useState(1); // State for shake quantity
  const [subtotalShake, setSubtotalShake] = useState(200); // Initial subtotal for shake


  const handleIceCreamQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantityIceCream(newQuantity);
    setSubtotalIceCream(newQuantity * 30);
  };

  const handleShakeQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantityShake(newQuantity);
    setSubtotalShake(newQuantity * 200);
  };

  const getTotalPrice = () => {
    return subtotalIceCream + subtotalShake;
  };

  return (
    <>
      <h1 className='text-center'>Product</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Info</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price Per unit</th>
              <th scope="col">Price (Subtotal)</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><img src={iceCream} alt="Ice Cream" className='img-fluid rounded' style={{ height: "100px", width: "100px" }} /></td>
              <td>Yummy Chocolate Ice Cream</td>
              <td>
                <input
                  type="number"
                  className="quantity"
                  value={quantityIceCream}
                  min="0"
                  onChange={handleIceCreamQuantityChange}
                />
              </td>
              <td>$30</td>
              <td>${subtotalIceCream}</td>
              <td><button className='btn btn-danger btn-lg'>Remove</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td><img src={shake} alt="Shake" className='img-fluid rounded' style={{ height: "100px", width: "100px" }} /></td>
              <td>Delicious Milkshake</td>
              <td><input
                type="number"
                className="quantity"
                value={quantityShake}
                min="0"
                onChange={handleShakeQuantityChange}
              /></td>
              <td>$200</td>
              <td>${subtotalShake}</td>
              <td><button className='btn btn-danger btn-lg'>Remove</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end align-items-center container ">
        <button className='btn btn-lg btn-primary text-light fw-semibold'>Total :- ${getTotalPrice()}</button>
      </div>

      <div className="d-flex justify-content-center align-items-center container ">
        <Link to="/question-2">
          <button className='btn btn-lg btn-dark text-light fw-semibold'>next</button>
        </Link>
      </div>
    </>
  );
}
