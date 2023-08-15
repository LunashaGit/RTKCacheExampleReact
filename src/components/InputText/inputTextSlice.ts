import { createSlice } from "@reduxjs/toolkit";
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
});

export const { updateInputTextCache } = inputTextSlice.actions;
export default inputTextSlice.reducer;
