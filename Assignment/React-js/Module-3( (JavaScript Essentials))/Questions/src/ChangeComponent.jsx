import { useState } from 'react'


export default function ChangeComponet() {
  // destructuring 
  const [name, setName] = useState([
    "Isha", "Disha", "Manshi"
  ])

  const updateName = () => {

    const newname = ["Harsh", "Miraj", "Viraj"];
    setName(newname);
  }
  return (
    <>
      <div className="container w-8/12 mx-auto mt-10 bg-transparent">
        <div className="container w-7/12 mx-auto mt-10 text-center">

          <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-3xl" onClick={updateName}>Click Me!</button>

          <ul className='mt-10 text-3xl'>
            {name.map((name, index) => {
              return (

                <li key={index} className='text-white fw-semibold'>hello {name}</li>

              )
            })}
          </ul>
        </div></div>
    </>
  )
}
