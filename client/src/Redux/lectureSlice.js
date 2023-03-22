import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  lectures: [],
};

// function to get all the lectures
export const getCourseLecture = createAsyncThunk(
  "/course/lecture/get",
  async () => {}
);

export const addCourseLecture = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    const formData = new FormData();
    formData.append("lecture", data.video);
    formData.append("title", data.title);
    formData.append("description", data.description);

    try {
      console.log(data.id);
      const res = axiosInstance.post(`/courses/${data.id}`, formData);

      toast.promise(res, {
        loading: "Adding the lecture...",
        success: "Lecture added successfully",
        error: "Failed to add lecture",
      });

      const response = await res;
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  }
);

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = lectureSlice.actions;
export default lectureSlice.reducer;
