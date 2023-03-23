import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  key: "",
};

// function to get the api key
export const getRazorPayId = createAsyncThunk("razorPayId/get", async () => {
  try {
    const res = await axiosInstance.get("/payments/razorpay-key");
    return res;
  } catch (error) {}
});

const razorpaySlice = createSlice({
  name: "razorpay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRazorPayId.rejected, () => {
        toast.error("Failed to get razor pay id");
      })
      .addCase(getRazorPayId.fulfilled, (state, action) => {
        state.key = action.payload.data.key;
      });
  },
});

export const {} = razorpaySlice.actions;
export default razorpaySlice.reducer;
