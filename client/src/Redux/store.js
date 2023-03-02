import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Redux/authSlice";
import courseSliceReducer from "../Redux/courseSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    course: courseSliceReducer,
  },
});

export default store;
