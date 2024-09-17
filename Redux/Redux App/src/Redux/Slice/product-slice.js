import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: null,
  reducers: {
    storeProduct: (state , action) => {
      state = action.payload
      return state;
    },
    removeProduct: () => {
      return {
        name: null
      }
    }
  }
})


export const {storeProduct , removeProduct} = productSlice.actions
export default productSlice.reducer