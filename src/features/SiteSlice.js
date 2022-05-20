import { createSlice } from "@reduxjs/toolkit";

export const SiteSlice = createSlice({
  name: "site",
  initialState: {
    dark: false,
    language: "tr",
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setDarkModa, setLanguage } = SiteSlice.actions;
export default SiteSlice.reducer;
