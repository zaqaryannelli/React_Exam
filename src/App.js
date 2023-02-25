import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Basket from "./components/Pages/Basket/Basket";
import Home from "./components/Pages/Home/Home";
import Error from "./components/Pages/Error/Error";
import Details from "./components/Pages/Details/Details";
import './App.css';
import { useCallback, useMemo, useState } from 'react';
import Fav from './components/Pages/Favorites/Fav';
import LogIn from './components/Pages/LogIn/LogIn';
import Footer from './components/Footer/Footer';
import { Register } from './components/Pages/Register/Register';
function App() {

  const toggleForm = (forName) => {
    setCurrentForm(forName)
  }

  const [cartProducts, setCartProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [warning, setWarning] = useState(false)
  const [fav, setFav] = useState([])
  const [details, setDetails] = useState([])
  const [currentForm, setCurrentForm] = useState("login")



    const addToCart = (productId) => {
        const productExist = cartProducts.find((product) => product.id === productId.id)
        if (productExist) {
            setCartProducts(cartProducts.map((product) => product.id === productId.id ? {...productExist, qty : productExist.qty += 1}: productId))
        }else {
            setCartProducts([...cartProducts, {...productId, qty: 1}])
        }
    }


    const addToFav = (productId) => {
        const productExist = cartProducts.find((product) => product.id === productId.id)
        if (productExist) {
            setCartProducts(cartProducts.map((product) => product.id === productId.id ? {...productExist, qty : productExist.qty += 1}: productId))
        }else {
            setCartProducts([...cartProducts, {...productId, qty: 1}])
        }
    }

    const handeClick = (product) => {
      console.log(product);
      let isExist = false
      basket.forEach((item) => {
        if (product.id === item.id)
          isExist = true
      })

      if(isExist){
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000)
        return ;
      }
         setBasket([...basket, product]);
      
    }


    const handeClickk = (product) => {
      console.log(product);
      let isExist = false
      fav.forEach((item) => {
        if (product.id === item.id)
          isExist = true
      })

      if(isExist){
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000)
        return ;
      }
         setFav([...fav, product]);
      
    }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home handeClick = {handeClick} handeClickk={handeClickk}/>}/>
        <Route path = "/basket" element = {<Basket basket={basket} setBasket={setBasket} cartProducts = {cartProducts}/>}/>
        <Route path='/fav' element = {<Fav handeClick={handeClick} fav={fav} setFav={setFav} cartProducts = {cartProducts}/>}/>
        <Route path = "/details/:productId" element = {<Details details={details} setDetails={setDetails}/>}></Route>
        <Route path = "/*" element = {<Error/>}/>
        <Route path='/login' element={currentForm === "login"? <LogIn onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}/>
      </Routes>
      <Footer/>
      {
         warning && <div className='already_add'>Already added</div>
        }
    </div>
  );
}

export default App;
