import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Product from './Product'
import axios from "axios"




const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
`
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cont,setcont]=useState([])

  useEffect(() => {

    
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/product?cat=${cat}`
            : "http://localhost:5000/api/product"
        );
        setProducts(res.data);
       // console.log(products)
        

      } catch (err) {}
    };
    getProducts();
  },[cat,products]);

  useEffect(()=>{
  filters && setcont(filters)
},[filters])
//console.log(cont)
  useEffect(() => {
     cont &&setFilteredProducts(
        products.filter((item) =>
          Object.entries(cont).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products,cont]); 
  //  console.log(filteredProducts)
   useEffect(()=>{
    if(sort=== "newest"){
      setFilteredProducts(prev=> [...prev].sort((a,b)=>a.createdAt-b.createdAt))
    }else if(sort==="asc")  {
      setFilteredProducts(prev=> [...prev].sort((a,b)=>a.price-b.price))
    }else{
      setFilteredProducts(prev=> [...prev].sort((a,b)=>b.price-a.price))
    }
   },[sort])
  // console.log(products)
  //console.log(filteredProducts)
  return (
    <Container>
      {cat? filteredProducts.map(item=>(
        <Product item={item}/>
      )):
      products.slice(0,6).map (item=>(
        <Product item={item}/>
      ))
    }
      
    </Container>
  )
}



export default Products
