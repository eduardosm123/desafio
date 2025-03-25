import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "",
    description: "",
    stargazers_count: 0,
    language: "",
    html_url: "",
  },
};

export const repositorySlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    setDataRepository: (state, { payload }) => {
      state.data = payload;
    },
    setName: (state, { payload }) => {
      state.data.name = payload;
    },
    clearRepository: (state) => {
      state.data = {
        name: "",
        description: "",
        stargazers_count: 0,
        language: "",
        html_url: "",
      };
    },
  },
});

export const { setDataRepository, setName, clearRepository } = repositorySlice.actions;
