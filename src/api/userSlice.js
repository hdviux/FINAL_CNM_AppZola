import signinAPI from "./signinAPI";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const signin = createAsyncThunk("user/signin", async (payload) => {
  const data = await signinAPI.signIn(payload);
  await AsyncStorage.setItem("token", data.data.accessToken);
  await AsyncStorage.setItem("user", JSON.stringify(data.data.user));
  console.log(data.data.user);
  return data.data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: signin,
  },
  reducers: {},
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
