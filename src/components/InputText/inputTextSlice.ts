import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "reduxjs-toolkit-persist";
const initialState = {
  inputTextCache: "Default",
};

const inputTextSlice = createSlice({
  name: "inputText",
  initialState,
  reducers: {
    updateInputTextCache: (state, action) => {
      state.inputTextCache = action.payload;
    },
  },
  extraReducers: {
    [REHYDRATE]: (state, action) => {
      state.inputTextCache = action.payload.inputText.inputTextCache;
    },
  },
});

export const { updateInputTextCache } = inputTextSlice.actions;
export default inputTextSlice.reducer;
