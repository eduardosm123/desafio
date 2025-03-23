import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../Interfaces/User.ts"

const initialState: IUser = {
    name: '',
    description: '',
    numberStars: 0,
    primaryLanguage: '',
    externalLink: ''
}  

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state = payload
        },
        setUsername: (state, {payload}) => {
            state.name = payload
        }
    }
})

export const { setUser, setUsername } = userSlice.actions;