import React, { useEffect, useState } from "react"
import Product from "../../Product/Product"
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import './Home.css'

export default function Home({handeClick, handeClickk}) {

    const [text, setText] = useState("")
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            return await fetch("https://www.dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products)
                setSearch(data.products)
            })
        }
        fetchProducts()
    }, [])
    console.log(products);

    useEffect(() =>{
        if (text.length >= 2) {
            setProducts(search.filter((product) => product.title.toLowerCase().includes(text)))
        }else{
            setProducts(search)
        }
    }, [text])

    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})
      }

    const gooToBtn = () => {
        window.scrollTo({top:10000, left:0, behavior:'smooth'})
      }


    return (
        <div className="home_container">
            <div className="search_box">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search product..."/>
            </div>
            <div className="display_products">
                {
                    products.map((product) => {
                        return <Product key={product.id} product ={product} handeClick = {handeClick} handeClickk={handeClickk}/>
                    })
                }
            </div>
            <div className='top_btn' onClick={goToBtn}>
      <BsFillArrowUpCircleFill color="wheat" size="30px"/>
    </div>
            <div className='bottom_btn' onClick={gooToBtn}>
      <BsFillArrowDownCircleFill color="wheat" size="30px"/>
    </div>
        </div>
    )
}