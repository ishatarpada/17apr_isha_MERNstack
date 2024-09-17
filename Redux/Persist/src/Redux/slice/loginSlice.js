import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    setUser: (state , action) => {
      state = action.payload
      return state
    },
    removeUser: (state) => {
      state = null
      return state
    }
  }
})

export const { setUser, removeUser } = loginSlice.actions

export default loginSlice.reducer;