import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  token: localStorage.getItem("token") || "",
  userData: JSON.parse(localStorage.getItem("userData")) || null,
};

// creating the create account thunk
export const createAccount = createAsyncThunk("/signup", async (data) => {
  console.log(data);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setData: (state, action) => {},

    logout: (state) => {
      // clearing the local storage saved data
      localStorage.clear();

      // updating the state with default initial value
      state.isLoggedIn = false;
      state.role = "";
      state.token = "";
      state.userData = "";

      // logout success toast
      <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <div>
            <span>Logout Successfully.</span>
          </div>
        </div>
      </div>;
    },
  },
});

export const { setIsLoggedIn, setRole, setToken, setUserData } =
  authSlice.actions;
export default authSlice.reducer;
