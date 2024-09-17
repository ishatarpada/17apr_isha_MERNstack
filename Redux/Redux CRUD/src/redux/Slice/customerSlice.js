import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const customerSlice = createSlice({
  name: 'customer',
  initialState: [],
  reducers: {
    createCustomer: (state, action) => {
      return [...state, action.payload];
    },
    updateCustomer: (state, action) => {
      return state.map(customer =>
        customer.id === action.payload.id ? { ...customer, ...action.payload } : customer
      );
    },
    deleteCustomer: (state, action) => {
     state.splice(action.payload , 1);
     return state;
    }
  }
});

export const { createCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
