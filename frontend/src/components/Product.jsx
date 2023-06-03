import { Link } from 'react-router-dom'
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'




const Image=styled.img`
width:200px;
height:265px;
object-fit:cover;
cursor:pointer;


`
const Icon=styled.div`
border-radius:50%;
margin:5px;
opacity:0.8;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;

`

const Container=styled.div`
flex:1;
margin:5px;
display:flex;
align-items:center;

justify-content:center;
&:hover ${Image}{
  -ms-transform: scale(1.2); 
  -webkit-transform: scale(1.2); 
   transform: scale(1.08); 
};

&:hover ${Icon}{
  -ms-transform: scale(1.2); 
  -webkit-transform: scale(1.1); 
   transform: scale(1.1);
   background-color:white; 
};



`


const Info=styled.div`
position:absolute;
display:flex;
`












const Product = ({item}) => {
  
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Icon>  <ShoppingCartOutlined/> </Icon>
        <Icon> <Link to={`/product/${item._id}`}> <SearchOutlined/> </Link> </Icon>
        <Icon>  <FavoriteBorder/> </Icon>
      </Info>
    </Container>
  )
}



export default Product
