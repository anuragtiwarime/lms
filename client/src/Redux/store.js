import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Redux/authSlice";
import courseSliceReducer from "../Redux/courseSlice";
import lectureSliceReducer from "../Redux/lectureSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    course: courseSliceReducer,
    lecture: lectureSliceReducer,
  },
});

export default store;
