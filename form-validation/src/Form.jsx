import React, { useState } from 'react';

export default function Form() {
  // Initial form state
  const model = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  const [form, setForm] = useState(model);
  const [errForm, setErrForm] = useState({ ...model });

  // Validator function
  const validator = (key, value) => {
    let errorMessage = null;

    switch (key) {
      case 'name':
        if (!value.trim().length) {
          errorMessage = 'Name field is required';
        }
        break;

      case 'email':
        if (!value.trim().length) {
          errorMessage = 'Email field is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMessage = 'Invalid email format';
        }
        break;

      case 'phone':
        if (!value.trim().length) {
          errorMessage = 'Phone number field is required';
        } else if (!/^\d{10}$/.test(value)) {
          errorMessage = 'Phone number must be 10 digits';
        }
        break;

      case 'password':
        if (!value.trim().length) {
          errorMessage = 'Password field is required';
        } else if (value.length < 8) {
          errorMessage = 'Password must be at least 8 characters';
        } else if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) {
          errorMessage = 'Password must include uppercase, lowercase, and a number';
        }
        break;

      default:
        break;
    }

    setErrForm(prevErrors => ({
      ...prevErrors,
      [key]: errorMessage,
    }));
  };

  // Update form state and validate input
  const getValue = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
    validator(name, value);
  };

  // Handle form submission
  const signUp = (e) => {
    e.preventDefault();

    // Validate all fields
    let hasErrors = false;
    Object.keys(form).forEach(key => {
      validator(key, form[key]);
      if (errForm[key]) hasErrors = true;
    });

    // If no errors, log form data or handle submission
    if (!hasErrors) {
      console.log('Form submitted successfully:', form);
      // Example: Reset form if you want to clear the fields after successful submission
      // setForm(model);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen font-serif">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>
        <form onSubmit={signUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={getValue}
              className={`w-full px-3 py-2 border ${errForm.name ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`}
            />
            {errForm.name && <small className="text-red-600 font-semibold text-sm my-2">{errForm.name}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={getValue}
              className={`w-full px-3 py-2 border ${errForm.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`}
            />
            {errForm.email && <small className="text-red-600 font-semibold text-sm my-2">{errForm.email}</small>}
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={getValue}
              className={`w-full px-3 py-2 border ${errForm.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`}
            />
            {errForm.phone && <small className="text-red-600 font-semibold text-sm my-2">{errForm.phone}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              value={form.password}
              onChange={getValue}
              className={`w-full px-3 py-2 border ${errForm.password ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`}
            />
            {errForm.password && <small className="text-red-600 font-semibold text-sm my-2">{errForm.password}</small>}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-700 text-white font-bold py-2 px-8 rounded-lg hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
