//import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import {  useSelector } from "react-redux";
import Navbar from '../components/Navbar';

const Container=styled.div`
background-color: #F5F5F4;
height:100vh;
justify-content:center;
align-items:center;

`
const Formwrap=styled.div`
background: url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80") ;
width:100wv;
background-repeat: no-repeat;
background-size:cover;
height:589px;
display:flex;
justify-content:center;`
const Form=styled.form`

display:flex;


margin-top:100px;
flex-direction:column;
padding:5px;
justify-content:center;
align-items:center;
`
const FormInput=styled.input`

width:300px;
margin:5px 0;
height:20px;
border-top:none;
border-right:none;
border-left:none;
outline:none;
margin-top:10px;`


const FormLabel=styled.label``
const FormButton=styled.button`
margin-top:10px;
width:150px;
cursor:pointer;
height:40px;
border:none;
margin-top:5px;
background-color:#269FBD ;`

const Admin = () => {

const [title,Settitle]=useState("")
const [desc,Setdesc]=useState("")
const [img,Setimg]=useState("")
const [category,Setcategory]=useState([])
const [color,Setcolor]=useState([])
const [size,Setsize]=useState([])
const [price,Setprice]=useState("")
const base_url="http://localhost:5000/api/"
const user=useSelector((state)=>state.user.currentUser);
 const Token=`${user?.token}`
const adminreq=axios.create({
    baseURL:base_url,
    headers:{token:`Bearer ${Token}`}
 })
   
const handleClick= async(e)=>{
    e.preventDefault()    
    try{

        adminreq.post("product",{title:title,
            desc:desc,
            img:img,
            categories:category,
            color:color,
            size:size,
            price:price,})
        }catch(err){
console.log(err)
        }
    }
  return (
    
    <Container>
        <Navbar></Navbar>
        <Formwrap><Form>
        <FormLabel>Title</FormLabel>
        <FormInput onChange={(e)=>{Settitle(e.target.value)}}></FormInput>
        <FormLabel>Desc</FormLabel>
        <FormInput onChange={(e)=>{Setdesc(e.target.value)}}></FormInput>
        <FormLabel>İmg</FormLabel>
        <FormInput onChange={(e)=>{Setimg(e.target.value)}}></FormInput>
        <FormLabel>Category</FormLabel>
        <FormInput onChange={(e)=>{Setcategory(e.target.value)}}></FormInput>
        <FormLabel>Color</FormLabel>
        <FormInput onChange={(e)=>{Setcolor(e.target.value)}}></FormInput>
        <FormLabel>Size</FormLabel>
        <FormInput onChange={(e)=>{Setsize(e.target.value)}}></FormInput>
        <FormLabel>Price</FormLabel>
        <FormInput onChange={(e)=>{Setprice(e.target.value)}}></FormInput>
        <FormButton onClick={handleClick}>ADD PRODUCT</FormButton>
     </Form>
</Formwrap>
     


    </Container>
  )
}

export default Admin