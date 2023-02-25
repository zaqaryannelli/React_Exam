import React, { useEffect, useRef, useState } from 'react'
import "./Basket.css"

export default function Basket({handleChange, basket, setBasket, data}) {

    const [price, setPrice] = useState(0)
    const [count, setCount] = useState(1)
    const countRef = useRef(0)
    countRef.current++


    const handlePrice = () => {
        let ans = 0;
        basket.map((product) =>(
            ans +=count * product.price
        ))
        setPrice (ans)
    }

    useEffect(() => {
        handlePrice()
    })

    const handeRemove = (id) => {
        const arr = basket.filter((item)=> item.id !== id)
        setBasket(arr)
    }


    const handleBuy = (id) => {
        const arr = basket.filter((item)=> item.id === id)
        setBasket(arr)
    }

  return (
    <div className='basket'>
        {
            basket.map((product) => {
                return<div className='cart_box'>
                        <div className='cart_img'>
                        <img src={product.thumbnail}/>
                    </div>
                    <div className="cart_name">
                        <p>{product.title}</p>
                    </div>
                    {/* <div className='cart_buttons'>
                        <button className='cart_button'>-</button>
                        <span>{count}</span>
                        <button className='cart_button'>+</button>
                    </div> */}
                    <div className="cart_price">
                        <p>{product.price} AMD</p>
                    </div>
                    <div className='remove'>
                        <button onClick={()=>handeRemove(product.id)}>Remove</button>
                    </div>
                   </div>
            })
        }
                <div className='bottom'>
                    <div className='total_price'>
                        <p>Total price- {price} AMD</p>
                    </div>
                    <div className='finish'>
                        <button onClick={handleBuy}>Buy</button>
                    </div>
                </div>
    </div>
  )
  
}
