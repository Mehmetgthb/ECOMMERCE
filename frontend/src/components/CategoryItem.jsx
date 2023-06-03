import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'





const Container=styled.div`
flex:1;
position:relative;
margin:3px;

`
const Image=styled.img`
width:100%;
height:70vh ;
object-fit:cover;


`
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Title=styled.div`
font-weight:600;
font-size:20px;
color:white;
margin-bottom:20px
`
const Button=styled.button`
border:none;
padding:8px;
background-color:white;
color:gray;
font-weight:500;
cursor:pointer;

 

`


export const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP THİS COLLECTİON </Button>
      </Info>
     </Link>
    </Container>
  )
}
