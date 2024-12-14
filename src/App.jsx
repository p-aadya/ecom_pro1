import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Product from './component/Product'
import Productdata from './component/Productdata'
import Search from './component/Search'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { items } from './component/Data'
import Cart from './component/cart'

function App() {
  const [data,setdata]=useState([...items])
  const[cart,setcart]=useState([])
  return (
    <>
    <Router>
    <Navbar setdata={setdata} cart={cart}/>
   
     <Routes>
      <Route path='/' element={<Product items={data} 
      cart={cart} setcart={setcart}/>}/>
      <Route path='/product/:id' element={<Productdata/>}/>
      <Route path='/cartinfo' element={<Cart cart={cart}/>}/>
      <Route path='/search/:term' element={<Search/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
