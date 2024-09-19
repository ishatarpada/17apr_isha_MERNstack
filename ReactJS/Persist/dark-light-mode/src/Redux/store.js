import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // default storage (localStorage)
import { persistReducer, persistStore } from "redux-persist";
import themeSlice from "./slice/themeSlice";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Configuration for persisting theme slice
const persistConfig = {
  key: "theme",
  version: 1,
  storage,
};

// Combine Reducers
const rootReducer = combineReducers({
  theme: themeSlice,
});

// Wrap the reducer with `persistReducer` for persistence
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Store with persistence and disable serializable checks for Redux Persist actions
const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); 

export default store;
