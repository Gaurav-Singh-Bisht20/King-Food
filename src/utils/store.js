import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./sliceCart";

const Store= configureStore({
    reducer:{
        cart:sliceCart,
    }
})

export default Store;