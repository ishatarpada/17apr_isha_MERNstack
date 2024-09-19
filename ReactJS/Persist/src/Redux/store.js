import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import loginSlice from "./slice/loginSlice";

const setUp = {
  key: 'login',
  version: 1,
  storage
};

const slices = combineReducers({
   loginSlice 
});

const persistedReducer = persistReducer(setUp, slices);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
