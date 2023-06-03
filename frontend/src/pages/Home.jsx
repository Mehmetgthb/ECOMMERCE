import React from "react";


import Navbar from "../components/Navbar";

import  {Categ} from "../components/Categ";
import Adv from "../components/Adv";
import Products from "../components/Products";



const Home = () => {
  return (
   
      <div>
        <Navbar />
        <Adv></Adv>
        <Categ/>
        <Products/>
      </div>
      
      
     
   
  );
};

export default Home;
