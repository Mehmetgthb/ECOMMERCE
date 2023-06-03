import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { useLocation } from 'react-router'

const Container=styled.div``
const Sum=styled.div`
margin-top:50px;
margin-left:10px;
font-size:22px;
font-weight:600   
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;


`
const Filter=styled.div`
margin:0 20px`

const FilterText=styled.span`
font-size:18px;
font-weight:400;
margin-right:10px;

`
const Select=styled.select`
`
const Option=styled.option`
`
const Right=styled.div`
display:flex;
`


const ProductList = () => {
  const Location=useLocation();
const cat=(Location.pathname.split("/")[2])
const [filters,setfilters]=useState()
const [sort,setsort]=useState()

const filterProduct=(e)=>{
const value=e.target.value
setfilters({
  ...filters,
  [e.target.name]:value
})



}



  return (


<Container>
  <Navbar></Navbar>
  <Sum>{cat.toUpperCase()}</Sum>  
  <FilterContainer>

    <Filter>
      <FilterText>Filter With Color</FilterText>
      <Select name='color' onChange={filterProduct} >
        <Option disabled selected>Color</Option>
        <Option>white</Option>
        <Option>black</Option>
        <Option>blue</Option>
        <Option>green</Option>
        <Option>red</Option>
        
      </Select>
      </Filter>
     <Right><Filter>
      <FilterText>Filter With Size</FilterText>
      <Select name='size' onChange={filterProduct} >
        <Option disabled selected >Size</Option>
        <Option>XS</Option>
        <Option>S</Option>
        <Option>M</Option>
        <Option>L</Option>
        <Option>XL</Option>
        
      </Select>
      </Filter>
      <Filter>
      <FilterText>Sort</FilterText>
      <Select onChange={(e)=>setsort(e.target.value)} >
        <Option disabled selected>Sort</Option>
        <Option value="desc">Price desc</Option>
        <Option value= "asc">Price asc</Option>
        <Option value= "newest">Newest</Option>
        
      </Select>
      </Filter></Right>
    

  </FilterContainer>
   <Products cat={cat} filters={filters} sort={sort}></Products>
   <Footer></Footer>
</Container>

)
    
  
}   
export default ProductList