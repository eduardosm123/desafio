import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../Interfaces/User.ts";

const initialState: IUser = {
  data: {
    name: "",
    avatar_url: "",
    bio: "",
    followers: 0,
    following: 0,
  },
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
    }
     
  },
});

export const { setUser, setUsername } = userSlice.actions;
