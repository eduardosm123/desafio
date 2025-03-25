import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: ""
};

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    clearFetch: (state) => {
      state.error = ""
      state.loading = false
    }
  },
});

export const { setError, setLoading, clearFetch } = fetchSlice.actions;
