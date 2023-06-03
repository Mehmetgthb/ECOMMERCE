import React, {  useEffect, useState } from 'react'

import styled from 'styled-components'
import {useDispatch} from "react-redux"
import { loginFailure, loginStart, loginSucces } from '../redux/userRedux'
import axios from 'axios'


const Container=styled.div`
width:100vw;
height:100vh;
background: url("https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80") ;
background-repeat: no-repeat;
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
position:relative;
opacity:0.9;


`
const Wrapper=styled.div`
display:flex;
background-color:white;
justify-content:center;
align-items:center;
width:30%;
height:60%;
flex-direction:column;




padding:5px;
`
const Form=styled.form`
display:flex;


flex-direction:column;

`
const Input=styled.input`
width:300px;
margin:5px 0;
height:30px;
border-top:none;
border-right:none;
border-left:none;
outline:none;
margin-top:10px;

`
const Button=styled.button`
width:50%;
cursor:pointer;
height:20%;
border:none;
margin-top:5px;
background-color:#269FBD ;
`
const Title=styled.div`

`
const Text=styled.a`
margin:4px 0px;
font-size:14px;
font-weight:400;
cursor:pointer;
margin-bottom:5px
`



  

const Login = () => {


  const[Username,Setusername]=useState("")
  const[Password,Setpassword]=useState("")
  const dispatch=useDispatch()
  useEffect(()=>{console.log(Username)}
  ,[Username])
  const handleSubmit= async (e)=>{
    e.preventDefault();
    dispatch(loginStart())

      
    try{
       const res= await axios.post("http://localhost:5000/api/auth/login",{
        username:Username,
        password:Password
       })
       console.log(res.data)
       dispatch(loginSucces(res.data))
       
    }catch(err){
     dispatch(loginFailure(err))
    }
  }
  return (
    <Container>
    
    <Wrapper>
        <Title>LOGIN</Title>
    <Form   onSubmit={handleSubmit}>
    
    <Input placeholder="Username" onChange={(e)=>Setusername(e.target.value)}></Input>
    
    <Input  type='password' placeholder="Password" onChange={(e)=>Setpassword(e.target.value)}></Input>
    
    <Text>DO YOU FORGET THE PASSWORD?</Text>
    <Text>DO NOT YOU HAVE A ACCOUNT ? CREATE A NEW ONE</Text>
    <Button >SIGN IN</Button>
    </Form>

    </Wrapper>

   </Container>






    
  )
}

export default Login