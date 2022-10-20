import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserDetails } from "./userAction";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const userConnectID = localStorage.getItem("userConnect")
  ? JSON.parse(localStorage.getItem("userConnect"))
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  isConnected: false,
  userConnectID,
  rememberMe: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("userToken"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.isConnected = false;
    },
    rememberMeFunc: (state, { payload }) => {
      state.rememberMe = payload.remembMe;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userToken = payload.body.token;
      state.isConnected = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get user profile
    [getUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.body;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, rememberMeFunc } = userSlice.actions;
export default userSlice.reducer;