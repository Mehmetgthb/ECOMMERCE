import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { AddOutlined, RemoveOutlined } from '@material-ui/icons'
import { useLocation } from 'react-router'
import axios from 'axios'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container= styled.div`

`
const Wrapper=styled.div`
display:flex;
margin:80px;
padding:5px;
background-color: #F5F5F4;
border-radius:5px;
`
const Image=styled.img`
width:25%;





`


const InfoContainer=styled.div`
margin-left:30px;
`
const Desc=styled.div`
margin-bottom:20px
`
const Title=styled.div`
font-weight:500;
font-size:30px

`
const Price=styled.div`
font-size:25px`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`
const Filter=styled.div`
margin:10px;
display:flex;
`
const FilterTitle=styled.div``
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};




`
const Cart=styled.div`
margin-top:20px;
display:flex;
align-items:center;
`
const FilterSize=styled.select`
margin:0 5px`
const FilterSizeOption=styled.option``
const ButtonCart=styled.button`
background-color:#EBE8E2;
cursor:pointer;
&:hover
{background-color:#E76044}
`
const Product = () => {
  const Location=useLocation()
  const id=(Location.pathname.split("/")[2])
  const [product,setProduct]=useState({})
  const [quantity,Setquantity]=useState(1)
  const [color,Setcolor]=useState("")
  const [size,Setsize]=useState("")
  const dispatch=useDispatch()


  useEffect(()=>{
   
    const getProduct=async()=>{
      try{
        
        const res= await axios.get("http://localhost:5000/api/product/find/"+id)
         setProduct(res.data)

      }
      catch(err){}

    }

getProduct()

  },[id])

  const handleQuantity=(type)=>{
    if(type==="dec"){
      quantity>1 && Setquantity(quantity-1)
    }else{
      Setquantity(quantity+1)
    }
  }
  const handleClick=()=>{
    dispatch(
    addProduct({...product,quantity,color,size})
    )
  }  
  return (
    <Container>
       <Navbar></Navbar>
       <Wrapper>
        <Image src={product.img}></Image>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>{product.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {product.color && product.color.map((c) =>(
                      <FilterColor color={c} key={c} onClick={()=>Setcolor(c)} ></FilterColor>
                    ))}
                    
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                     <FilterSize onChange={(e)=>Setsize(e.target.value)}>
                     {product.size &&product.size.map((s)=>(
                      <FilterSizeOption key={s}>{s}</FilterSizeOption>
                     )) }
                     
                     </FilterSize>
                </Filter>
            </FilterContainer>
        <Cart>  <RemoveOutlined onClick={()=>handleQuantity("dec")}></RemoveOutlined>  
              {quantity}
              
            <AddOutlined onClick={()=>handleQuantity("inc")}></AddOutlined> <ButtonCart onClick={handleClick}>ADD CART</ButtonCart></Cart>
               
            </InfoContainer>
            
               
       </Wrapper>
        <Footer></Footer>
    </Container>
  )
}

export default Product