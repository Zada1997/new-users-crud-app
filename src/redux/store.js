import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../components/users/usersRedux/usersSlice"


export const store = configureStore({
    reducer:{
        users : usersReducer
    }
})