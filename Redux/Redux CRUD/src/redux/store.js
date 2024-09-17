import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Slice/customerSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});

export default store;
