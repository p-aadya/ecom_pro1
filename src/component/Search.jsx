import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const Search = () => {
  const {term}=useParams()
  const [filterdata,setfilterdata]=useState([])
  useEffect(()=>{
    const searchdata=()=>{
     const element=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
     setfilterdata(element)
    }
    searchdata()
  },[term])
  
  return (
    <>
   <Product items={filterdata}/>
    </>
  )
}

export default Search