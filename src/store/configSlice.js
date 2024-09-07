import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    theme: "dark",
  },

  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export default configSlice.reducer;

export const { toggleTheme } = configSlice.actions;
