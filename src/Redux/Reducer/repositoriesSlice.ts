import { createSlice } from "@reduxjs/toolkit";
import { IRepositoryList } from "../../Interfaces/Repositories.ts";

const initialState: IRepositoryList = {
  data: [],
  pages: 1,
  totalPages: 1,
  sort: "stars",
  order: "desc",
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setDataRepositories: (state, { payload }) => {
      state.data = payload;
    },
    setPage: (state, { payload }) => {
      state.pages = payload;
    },
    setTotalPage: (state, { payload }) => {
      state.totalPages = payload;
    },
    setSort: (state, { payload }) => {
      state.sort = payload;
    },
    setOrder: (state, { payload }) => {
      state.order = payload;
    },
    clearRepositoriesList: (state) => {
      state.data = [];
      state.pages = 1;
      state.totalPages = 1;
      state.sort = "stars";
      state.order = "desc";
    },
  },
});

export const {
  setDataRepositories,
  setPage,
  setTotalPage,
  setSort,
  setOrder,
  clearRepositoriesList,
} = repositoriesSlice.actions;
