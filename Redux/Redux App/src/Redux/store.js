import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./Slice/product-slice";

const store = configureStore({
  reducer: {
    productSlice
  }
})

export default store;