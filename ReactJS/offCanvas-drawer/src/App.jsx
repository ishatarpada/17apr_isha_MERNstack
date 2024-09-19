import 'remixicon/fonts/remixicon.css'
import Drawer from './Components/Drawer'
import { useState } from 'react'
import RegistrationForm from './Components/RegistrationForm';

export default function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-6/12 mx-auto py-12 font-serif">
        <h1 className="text-6xl font-bold text-center">
          Welcome
        </h1>
        <button
          onClick={() => setOpen(true)}
          className='bg-rose-600 text-white font-bold py-2 px-4 rounded'>
          Test
        </button>
        <Drawer
          direction="bottom"
          title="Register Now"
          content={<RegistrationForm />}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  )
}
