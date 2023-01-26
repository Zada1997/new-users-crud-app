import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../components/users/usersRedux/usersSlice"
import booksReducer from "../components/books/booksRedux/booksSlice";
import reviewsReducer from "../components/reviews/reviewsRedux/reviewsSlice"

export const store = configureStore({
    reducer:{
        users : usersReducer,
        books : booksReducer,
        reviews: reviewsReducer
    },
})