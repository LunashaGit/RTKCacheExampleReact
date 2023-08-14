import { combineReducers } from "@reduxjs/toolkit";
import inputTextReducer from "@/components/InputText/inputTextSlice";

export const rootReducer = combineReducers({
  inputText: inputTextReducer,
});
