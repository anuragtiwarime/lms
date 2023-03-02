import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  data: [],
};

// function to get all courses
export const getAllCourses = createAsyncThunk("/get/courses", async () => {
  try {
    const res = axiosInstance.get("/courses");

    toast.promise(res, {
      loading: "Loading courses data...",
      success: "Courses loaded successfully",
      error: "Failed to get courses",
    });

    const response = await res;
    console.log(response.data.courses);
    return response.data.courses;
  } catch (error) {
    console.log(error);
  }
});

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {});
  },
});

export const {} = courseSlice.actions;
export default courseSlice.reducer;
