import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import "./Footer.css"

export default function Footer() {

  return (
    <div className='footer_container'>
      <div className='top'>
       <div className='info'>
        <p>
          Address: Burnazyan 37, Erevan 0005, Armenia
        </p>
        <p>
          Phone: (+374 10) 578453, (+374 10) 578455
        </p>
        <p>
          Email: nellizakaryan1@gmail.com
        </p>
       </div>
       <div className='quetions'>
        <label htmlFor='firstname'>First name:</label>
        <input type="text" name="firstname"/>
        <label htmlFor='firstname'>Message:</label>
        <textarea placeholder='Write a message'/>
        <button className='send'>Send</button>
       </div>
      </div>
      <div className='links'>
        <p>Contact us:</p>
        <div className='a_div1'>
        <a href='https://www.instagram.com/'><FaInstagram className='a'/></a>
        </div>
        <div className='a_div2'>
        <a href='https://www.facebook.com/'><FaFacebookF className='a'/></a>
        </div>
        <div className='a_div3'>
        <a href='https://www.whatsapp.com/'><FaWhatsapp className='a'/></a>
        </div>
      </div>
    </div>
  )
}
