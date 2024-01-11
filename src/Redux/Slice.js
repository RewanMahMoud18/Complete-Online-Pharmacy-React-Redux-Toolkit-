import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: { scrollTop: 0 },
  reducers: {
    setScrollTop: (state, action) => {
      state.scrollTop = action.payload;
    },
  },
});

export const { setScrollTop } = scrollSlice.actions;
export const selectScrollTop = (state) => state.scroll.scrollTop;
export default scrollSlice.reducer;
