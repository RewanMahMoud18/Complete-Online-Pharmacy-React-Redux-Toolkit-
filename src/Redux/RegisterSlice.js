import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isRegistered: false,
  },
  reducers: {
    setRegistered: (state) => {
      state.isRegistered = true;
    },
  },
});

export const { setRegistered } = registerSlice.actions;
export const selectIsRegistered = (state) => state.register.isRegistered;
export default registerSlice.reducer;
