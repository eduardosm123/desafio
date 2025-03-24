import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Reducer/userSlice.ts"
import { fetchSlice } from "./Reducer/fetchSlice.ts";
import { repositoriesSlice } from "./Reducer/repositoriesSlice.ts";
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        fetch: fetchSlice.reducer,
        repositories: repositoriesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;