import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store =  configureStore({
    reducer:{
        cart:cartSlice,
    },
})

export default store


/**
 * create store
 * -configureStore from (rtk) redux tool kit
 * 
 * provide my store to app
 * - <Provide store={store} /> -- import from react-redux
 * 
 * Slice
 * -createSlice() from (RTK)
 * name:""
 * initialState:
 * reducers:{
 * addItem(state,action)=>{state= action.payload}
 * }
 * 
 * export const{addItem,removeItem} = cartSlice.actions
 * export default cartSlice.reducer
 * 
 * 
 * put slice into store
 * 
 * 
 */