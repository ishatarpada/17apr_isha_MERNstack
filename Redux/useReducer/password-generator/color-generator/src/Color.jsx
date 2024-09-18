import { useState } from 'react'

export default function Color() {

  const changeColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red} , ${green} , ${blue})`
  }

  return (
    <>
      {
        Array(1500).fill(0).map((item, index) => (
          <div
            key={index}
            className='w-[20%] h-[200px] float-start flex justify-center items-center text-white font-bold font-serif'
            style={{ backgroundColor: changeColor() }}
          >
            {index + 1}
          </div>
        ))
      }
    </>
  )
}
