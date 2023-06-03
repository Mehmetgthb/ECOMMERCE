import React from 'react'
import styled from 'styled-components'



const Container=styled.div`
width:100vw;
height:100vh;
background: url("https://wallpaperaccess.com/full/518054.jpg") ;
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
outline:none

`
const Button=styled.button`
width:60%;
cursor:pointer;
height:20%;
border:none;
`
const Title=styled.div`

`


const Register = () => {
  return (
   <Container>
    
    <Wrapper>
        <Title>REGISTER</Title>
    <Form>
    <Input placeholder="Name"></Input>

    <Input placeholder=" Last name"></Input>
    <Input placeholder="Username"></Input>
    <Input type='email' placeholder="Email"></Input>
    <Input  type='password' placeholder="Password"></Input>
    <Input type='password' placeholder="Confirm password"></Input>
    <Button>CREATE ACCOUNT</Button>
    </Form>






    </Wrapper>



    




   </Container>
  )
}

export default Register