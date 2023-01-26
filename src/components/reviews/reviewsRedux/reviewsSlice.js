import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReviews = createAsyncThunk(
    'app/reviews/fetchReviews',
    async(book)=>{
        const response = await axios.get(`https://632e1123b37236d2ebe5af2c.mockapi.io/users/${book.user_id}/books/${book.id}/reviews`)
        const data = await response.data
        return data
    }
)
const initialState = {
    reviews:[],
    openBook:{},
    status:null,
    error:null
} 
const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers:{
        setOpenBook(state,action){
            state.openBook= action.payload
        }
    },
    extraReducers:{
        [fetchReviews.pending]:(state)=>{
            state.status = "loading"
            state.error = null 
        },
        [fetchReviews.fulfilled]:(state,action)=>{
            state.status ="resolved"
            state.reviews = action.payload
        }
    }
})

export const selectedReviews = (state)=> state.reviews.reviews
export const openedBook = (state)=> state.reviews.openBook
export const {setOpenBook} = reviewsSlice.actions
export default reviewsSlice.reducer