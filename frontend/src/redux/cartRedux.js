import {createSlice} from "@reduxjs/toolkit"


const cartSlice= createSlice({

name:"cart",
initialState:{
    products:[],
    quantity:0,
    tPrice:0,
},

reducers:{
    addProduct:(state,action)=>{
        state.quantity+=1
        state.products.push(action.payload )
        state.tPrice+=action.payload.price*action.payload.quantity
    },
     deleteCart:(state)=>{
        state.products=[]
        state.quantity=0
        state.tPrice=0
     }

}

})

export const {addProduct,deleteCart}=cartSlice.actions
export default cartSlice.reducer