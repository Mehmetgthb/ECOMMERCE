import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
justify-content:center;
height:200px;
`
const İmg=styled.img`
width:400px;
height:200px;
`
const Adv = () => {
  return (
   <Container > <İmg src='https://i.pinimg.com/564x/67/e8/d9/67e8d919e49550a99ebc26ff926f5a26.jpg'></İmg></Container>
 
   )
}

export default Adv