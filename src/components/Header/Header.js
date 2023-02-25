import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {FaBars, FaHome, FaTimes} from "react-icons/fa"
import {FaHeart} from "react-icons/fa"
import {BsFillPersonFill} from "react-icons/bs"
import {MdShoppingCart} from "react-icons/md";
import "../Header/Header.css"


export default function Header() {

    const navigate = useNavigate()

    const activePage = ({isActive}) => ({color: isActive ? "red" : "wheat"})  

    const navRef = useRef()
    
    const [active, setActive] = useState("nav_menu")
    const [toggleIcon, setToggleIcon] = useState("nav_toggler")

    const navToggler = () => {
        active === "nav_menu" ? setActive('nav_menu nav_active') : setActive("nav_menu")
        toggleIcon === "nav_toggler"? setToggleIcon("nav_toggler toggle") : setToggleIcon("nav_toggler")
    }


    
    return(
        <header className="header">
            <nav ref={navRef} className="nav">
                <div className="title">
                    <p>Products</p>
                </div>
                  <div className="ul_div">
                  <ul className={active}>
                    <li className="nav_list">
                        <NavLink to="/" className="nav_link" style={activePage}><FaHome className="header_icon"/><span className="nav_span">Home</span></NavLink>
                    </li>
                    <li className="nav_list">
                        <NavLink to="/fav" className="nav_link" style={activePage}><FaHeart className="header_icon"/><span className="nav_span">Favorite</span></NavLink>
                    </li>
                    <li className="nav_list">
                        <NavLink to="/basket" className="nav_link" style={activePage}><MdShoppingCart className="header_icon"/><span className="nav_span">Basket</span></NavLink>
                    </li>
                    <li className="nav_list">
                        <NavLink to="/login" className="nav_link" style={activePage}><BsFillPersonFill className="header_icon"/><span className="nav_span">Log In</span></NavLink>
                    </li>
                  </ul>
                  </div>
                  <div onClick={navToggler} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                  </div>
            </nav>
        </header>
    )
}