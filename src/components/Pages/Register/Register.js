import React, { useState } from 'react'
import "./Register.css"

export const Register = (props) => {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const[name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  } 


  return (
    <div className='register'>
      <div className='register_container'>
      <h2>Register</h2>
      <form className='register_form' onSubmit={handleSubmit}>
        <label className='register_label' htmlFor='name'>Full name</label>
      <input className='register_input' defaultValue={name} name="name" placeholder='Full name'/>
        <label className='register_label' htmlFor="email">email</label>
        <input defaultValue={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' name='email' className='register_input'/>
        <label className='register_label' htmlFor="password">password</label>
        <input defaultValue={pass} onChange={(e)=> setEmail(e.target.value)} type="password" placeholder='********' name='password' className='register_input'/>
        <button className='login_button' type='submit'>Log In</button>
      </form>
      <button className='link_button' onClick={()=> props.onFormSwitch("login")}>Already have an accaunt? Login here.</button>
      </div>
      </div>
  )
}