import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Details.css"

export default function Details({details, setDetails}) {
  
  const [product, setProduct] = useState([])
    const {productId} = useParams ()
    
    useEffect(() => {
    const fetchSingleProduct = async (id) => {
    return await fetch(`https://www.dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => setProduct (data))
    }
    fetchSingleProduct (productId)
   }, [])


    return (
        <div className= 'detalis_container'>
            <div className='detalis_box'>
              <div className="detalis_img">
                  <img src={product.thumbnail}/>
              </div>
            <div className="detalis_info">
              <div className= "detalis_name">
                  <h2>{product.title}</h2>
              </div> 
            <div className="detalis_price"> 
                  <p>{product.price}</p>
            </div>
            <div className="detalis_desc"> 
                  <p>{product.description}</p>
            </div>
               </div>
            </div>
         </div>
  )
}
