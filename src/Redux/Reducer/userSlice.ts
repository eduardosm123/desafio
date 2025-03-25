import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../Interfaces/User.ts";

const initialState: IUser = {
  data: {
    name: "",
    avatar_url: "",
    bio: "",
    followers: 0,
    following: 0,
    email: "",
  },
  load: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.data = payload;
    },
    setUsername: (state, { payload }) => {
      state.data.name = payload;
    },
    setLoad: (state, {payload}) => {
      state.load = payload
    },
    clearUser: (state) => {
      state.data =  {
        name: "",
        avatar_url: "",
        bio: "",
        followers: 0,
        following: 0,
        email: "",
      }
      state.load = false
    }
  },
});

export const { setUser, setUsername, setLoad, clearUser } = userSlice.actions;
