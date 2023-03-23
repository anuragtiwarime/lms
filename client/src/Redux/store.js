import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Redux/authSlice";
import courseSliceReducer from "../Redux/courseSlice";
import lectureSliceReducer from "../Redux/lectureSlice";
import razorpaySliceReducer from "./razorpaySlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    course: courseSliceReducer,
    lecture: lectureSliceReducer,
    razorpay: razorpaySliceReducer,
  },
});

export default store;
