import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: ""
};

export const fetchSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    }
  },
});

export const { setError, setLoading } = fetchSlice.actions;
