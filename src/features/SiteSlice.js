import { createSlice } from "@reduxjs/toolkit";

export const SiteSlice = createSlice({
  name: "site",
  initialState: {
    dark: localStorage.getItem("dark") || false,
    lang: localStorage["language"],
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state) => {
      state.lang = state.lang === "tr" ? "en" : "tr";
      localStorage["language"] = state.lang;
    },
  },
});

export const { setDarkMode, setLanguage } = SiteSlice.actions;
export default SiteSlice.reducer;
