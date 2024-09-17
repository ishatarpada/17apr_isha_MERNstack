import './App.css'
import { useState } from 'react'
import Swal from 'sweetalert2'

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    Swal.fire({
      icon: 'success',
      title: "Good Job",
      text: "Form Submitted"
    })
  }

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>
          <form action="#" method="POST" onSubmit={contactUs}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                onChange={(e) => {
                  setName(e.target.value)
                }} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                onChange={(e) => {
                  setEmail(e.target.value)
                }} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                type="text"
                id="Message"
                name="Message"
                value={message}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                onChange={(e) => {
                  setMessage(e.target.value)
                }} />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
