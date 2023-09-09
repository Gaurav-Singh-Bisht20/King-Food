import { createSlice } from "@reduxjs/toolkit";

const sliceCart=createSlice({
    name:"cart",
    initialState:{
        item:[]
    },
    reducers:{
            addItem:(state,action)=>{
                state.item.push(action.payload);
            },
            clearCart:(state)=>{
                state.item=[];
            },
            removeItem:(state,action)=>{
                state.item.pop();
            }
    }
})


export const {addItem,clearCart,removeItem} =sliceCart.actions;
export default sliceCart.reducer;