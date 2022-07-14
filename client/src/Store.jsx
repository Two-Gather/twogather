import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;
