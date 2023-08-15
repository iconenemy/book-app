import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAuthState,
  IError,
  ISignUpRes,
  IRefreshRes,
  ISignInReq,
  ISignInRes,
  ISignUpReq,
  IUser
} from "./authType";
import { PURGE } from "redux-persist";
import { apiSlice } from "../../app/api/apiSlice";
import { userApiSliece } from "../user/userApiSlice";

export const signIn = createAsyncThunk<
  ISignInRes,
  ISignInReq,
  { rejectValue: IError }
>("auth/signInUser", async (loginDto, thunkApi) => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDto),
  });
  if (response.status !== 200) {
    return thunkApi.rejectWithValue((await response.json()) as IError);
  }
  return (await response.json()) as ISignInRes;
});

export const signUp = createAsyncThunk<
  ISignUpRes,
  ISignUpReq,
  { rejectValue: IError }
>("auth/signUpUser", async (signUpDto, thunkApi) => {
  const response = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpDto),
  });
  if (response.status !== 200) {
    return thunkApi.rejectWithValue((await response.json()) as IError);
  }
  return (await response.json()) as ISignUpRes;
});


const initialState: IAuthState = {
  tokens: {
    access_token: "",
    refresh_token: ""
  },
  user: {
    email: "",
    first_name: "",
    last_name: "",
    id: "",
    role: "guest"
  },
  loading: false,
  errors: [],
  is_auth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    tokenReceived: (state, action: PayloadAction<IRefreshRes>) => {
      state.is_auth = true;
      state.user.email = action.payload.user.email;
      state.user.id = action.payload.user.id;
      state.user.role = action.payload.user.role;
      state.tokens = action.payload.tokens;
      state.tokens.refresh_token = action.payload.tokens.refresh_token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user.id = payload.user.id;
        state.user.email = payload.user.email;
        state.user.role = payload.user.role;
        state.tokens = payload.tokens;
        state.errors = [];
        state.is_auth = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(PURGE, () => initialState)
      .addMatcher(apiSlice.endpoints.refresh.matchFulfilled, (state, action: PayloadAction<IRefreshRes>) => {
        state.is_auth = true
        state.user.id = action.payload.user.id
        state.user.email = action.payload.user.email
        state.user.role = action.payload.user.role
        state.tokens = action.payload.tokens
      })
      .addMatcher(userApiSliece.endpoints.getUserInfo.matchFulfilled, (state, action: PayloadAction<IUser>) => {
        state.is_auth = true
        state.user = action.payload
      })
      .addMatcher(userApiSliece.endpoints.updateUser.matchFulfilled, (state, { payload }) => {
        state.is_auth = true
        state.user.first_name = payload.first_name
        state.user.last_name = payload.last_name
      })
  },
});

export const { tokenReceived, logout } = authSlice.actions;

export default authSlice.reducer;
