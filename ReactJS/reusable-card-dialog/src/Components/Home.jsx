import { useState } from 'react'
import Alert from './Reusable/Alert'
import Button from './Reusable/Button';

export default function Home() {

  const [alert, setAlert] = useState(
    {
      type : null ,
      open : false 
    }
  );

  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.name === '' || !formData.terms) {
      setAlert({
        type: 'error',
        open: true,
      });
      console.log('error: form data is incomplete');
    } else {
      setAlert({
        type: 'success',
        open: true,
      });
      console.log('Form data:', formData);
    }
  };

  return (
    <>
      <div className="bg-indigo-900 bg-opacity-90 flex justify-center items-center min-h-screen min-w-screen font-serif">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Homepage</h1>
          <p className="text-lg text-gray-700 mb-6">
            This is a simple homepage layout with an alert box.
          </p>
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-md my-5 container mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 text-start">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              {/* Checkbox for Terms and Conditions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the Terms and Conditions
                </label>
              </div>

              <div>
                <Button color="indigo">Sign Up</Button>
              </div>
            </form>
            
          </div>       
        </div>
      </div>

      <Alert open={alert.open} type={alert.type} onClose={() => setAlert({ ...alert, open: false })} />
    </>

  )
}
