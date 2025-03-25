import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Reducer/userSlice.ts";
import { fetchSlice } from "./Reducer/fetchSlice.ts";
import { repositoriesSlice } from "./Reducer/repositoriesSlice.ts";
import { repositorySlice } from "./Reducer/repositorySlice.ts";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    fetch: fetchSlice.reducer,
    repositories: repositoriesSlice.reducer,
    repository: repositorySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
