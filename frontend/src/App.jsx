
import Home from "../src/pages/Home"
import Login from "../src/pages/Login"
import Register from "../src/pages/Register"
import Product from "../src/pages/Product"
import ProductList from "../src/pages/ProductList"
import Admin from "../src/pages/Admin"

import {BrowserRouter as Router,  Routes,Route,Navigate} from "react-router-dom";
import Cart from "./pages/Cart"
import { useSelector } from "react-redux"





const App = () => {
  const user=useSelector((state)=>state.user.currentUser);
  console.log(user)
  return (
   
    <Router>
      <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={user? <Navigate replace to="/"/>:<Login></Login>}/>
      <Route path="/register" element={user? <Navigate replace to="/"/>:<Register/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/admin" element={<Admin/>}/>
      </Routes>
    
</Router>



  )
};

export default App;