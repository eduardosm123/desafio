import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Reducer/userSlice.ts"
import { fetchSlice } from "./Reducer/fetchSlice.ts";
 
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        fetch: fetchSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;