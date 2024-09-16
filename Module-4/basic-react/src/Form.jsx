import React from 'react'

export default function Form() {
  return (
    <>
      <form action="" method="post">
        <label htmlFor="name">Name :- </label>
        <input type="text" name='name'/>
        <br />
        <br />
        <label htmlFor="mail">Mail :-</label>
        <input type="email" name="mail" id="" />
      </form>
    </>
  )
}
