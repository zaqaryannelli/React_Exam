import React, { useState } from 'react'
import "./LogIn.css"



export default function LogIn(props) {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  } 

  return (
    <div className='logIn'>
      <div className='logIn_container'>
        <h2>Log In</h2>
      <form className='login_form' onSubmit={handleSubmit}>
        <label className='login_label' htmlFor="email">email</label>
        <input defaultValue={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' name='email' className='login_input'/>
        <label className='login_label' htmlFor="password">password</label>
        <input defaultValue={pass} onChange={(e)=> setEmail(e.target.value)} type="password" placeholder='********' name='password' className='login_input'/>
        <button className='login_button' type='submit'>Log In</button>
      </form>
      <button className='link_button' onClick={()=> props.onFormSwitch("register")}>Don't have an accaunt? Register here.</button>
      </div>
    </div>
  )
}