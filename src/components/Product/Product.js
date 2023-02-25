import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Product.css'


export default function Product({product, item, handeClick, handeClickk}){

    const navigate = useNavigate()

    const viewProduct = () => {
        navigate(`/detalis/${product.id}`)
    }


    return (
        <div className="product_box">
            <div className="product_img">
                <img src={product.thumbnail}/>
            </div>
            <div className="product_name">
                <h2>{product.title}</h2>
            </div>
            <div className="product_price">
                <h3>{product.price} AMD</h3>
            </div>
            <div className="buttons">
            <div className="add_cart">
                <button onClick={() => handeClick(product)}>Add to cart</button>
            </div>
            <div className="heart_div">
                <button onClick={()=>handeClickk(product)}>Add to favorite</button>
            </div>
            </div>
        </div>
    )

}