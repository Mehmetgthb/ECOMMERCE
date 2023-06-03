
import React from "react";
import styled from "styled-components";
import { ExitToAppOutlined, LocalMallSharp, Search,  ShoppingCartSharp} from "@material-ui/icons"
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { loginQuit } from "../redux/userRedux";
import { deleteCart } from "../redux/cartRedux";



const Container = styled.div`
  height: 60px;

 
`;
const Wrapper=styled.div`
padding: 10px 20px;
display:flex;

`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;

`

const Lng=styled.span`
font-size:14px;
cursor:pointer; 
`
const Input=styled.input`
border:none;
width:100%;
outline:none
`
const SearchContainer=styled.div`
flex:1;
display:flex;
align-items:center;
margin-left:20px;
padding:5px;
border: 1px solid lightgray;
justify-content:space-between;


`


const Center=styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
font-size:25px
`
const Logo=styled.div`
font-weight:bold;
display:flex;
align-items:center;

`
const Right=styled.div`
display:flex;
justify-content:flex-end;
flex:1;
align-items:center;
`

const MenuItem =styled.div`
font-size:14px;
cursor:pointer;
margin:10px;
display:flex;
align-items:center;

`

const Navbar = () => {
const dispatch=useDispatch()
var admin=null 

const cart=useSelector(state=>state.cart)
console.log(cart)

const user=useSelector((state)=>state.user.currentUser);
if(user){ //user control
if(user.isAdmin===true)  //isAdmin control
admin=true}
const handleClick=(e)=>{
  e.preventDefault()
  dispatch(loginQuit())
  dispatch(deleteCart())
   
admin=null
}
  return (
    <Container> 

<Wrapper>
  <Left>
    <Lng>ENG</Lng>
    <SearchContainer>
    <Input></Input>
      <Search style={{color:"gray",fontsize:16}}/>
    </SearchContainer>
    </Left>
  <Center><Logo>SH<LocalMallSharp></LocalMallSharp><LocalMallSharp></LocalMallSharp>PPİNG</Logo></Center>
  <Right>
   {!user&&<Link to="/register"><MenuItem>REGISTER </MenuItem></Link>}
   {!user &&<Link to="/login"><MenuItem>SIGN IN</MenuItem> </Link>} 
    {user &&  <Link to="/cart">
    <MenuItem> 
  <Badge badgeContent={cart.quantity} color="primary">
  <ShoppingCartSharp></ShoppingCartSharp>
  </Badge>
  </MenuItem>
  </Link> }
 {user&& <MenuItem> <ExitToAppOutlined onClick={handleClick}></ExitToAppOutlined> 
  EXIT</MenuItem>}
  {admin && <Link to={"/admin"}>Admin page</Link> }
    
  
  </Right>
  
  </Wrapper>

    </Container>
  );
};

export default Navbar;
