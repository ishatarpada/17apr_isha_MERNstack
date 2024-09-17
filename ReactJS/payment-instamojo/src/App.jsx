import React from 'react'
import axios from 'axios';

export default function App() {

  const payNow = async (e) => {
    try {
      e.preventDefault();
      const form = e.target;
      const {data} = axios.post('http://localhost:8080/payment', {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        amount: form.amount.value,
        product: form.product.value,
      })

      const {longurl} = data.payment_requests[0];
      window.location.href = longurl
      // console.log(data.payment_request[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="form-container">
        <h2>Payment Form</h2>
        <form onSubmit={payNow}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{10}" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" placeholder="Enter amount" required />
          </div>

          <div className="form-group">
            <label htmlFor="product">Product Name:</label>
            <input type="text" id="product" name="product" placeholder="Enter product name" required />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit Payment" />
          </div>
        </form>
      </div>
    </>
  )
}
