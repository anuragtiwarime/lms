import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  data: JSON.parse(localStorage.getItem("data")) || {},
  role: "",
};

// function to handle signup
export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    let res = axiosInstance.post("user/register", data);

    toast.promise(res, {
      loading: "Wait! Creating your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to create account",
    });

    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// function to handle login
export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    let res = axiosInstance.post("/user/login", data);

    await toast.promise(res, {
      loading: "Loading...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to log in",
    });

    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
});

// function to handle logout
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    let res = axiosInstance.post("/user/logout");

    await toast.promise(res, {
      loading: "Loading...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to log in",
    });

    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
});

export const getUserData = createAsyncThunk("/user/details", async () => {
  try {
    const res = await axiosInstance.get("/user/me");
    return res?.data;
  } catch (error) {
    toast.error(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // for user login
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action.payload.user));
        localStorage.setItem("isLoggedIn", true);
        state.isLoggedIn = true;
        state.data = action.payload.user;
        state.role = action.payload.user.role;
      })
      // for user logout
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.isLoggedIn = false;
        state.data = {};
      })
      // for user details
      .addCase(getUserData.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action.payload.user));
        localStorage.setItem("isLoggedIn", true);
        state.isLoggedIn = true;
        state.data = action.payload.user;
        state.role = action.payload.user.role;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
