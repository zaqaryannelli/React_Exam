import React, { useState } from 'react'
import { BsMenuUp } from 'react-icons/bs'
import { MdBugReport } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Product from '../../Product/Product'
import "./Fav.css"

export default function Fav({fav, setFav, handeClick}) {


  const handeRemove = (id) => {
    const arr = fav.filter((item)=> item.id !== id)
    setFav(arr)
}


  return (
    <div className='fav_container'>
      {
       fav.map((product)=>{
        return <div className='fav_box'>
            <div className='fav_img'>
              <img src={product.thumbnail}/>
            </div>
            <div className='fav_name'>
              <p>{product.title}</p>
            </div>
            <div className='addCart'>
              <button onClick={()=> handeClick(product)}>Add to cart</button>
            </div>
            <div className='remove'>
              <button onClick={()=>handeRemove(product.id)}>Remove</button>
            </div>
          </div>
       })      
      }
      </div>
  )
}