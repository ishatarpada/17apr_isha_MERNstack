import React from 'react'
import Header from './Header'
import Question from './Question'
export default function Layout() {
  return (
    <div>
      <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900 py-5'>
      <Header/>
      <Question/>
        </div>
    </div>
  )
}