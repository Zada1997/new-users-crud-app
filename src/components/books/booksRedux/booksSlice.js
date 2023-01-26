import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
    'app/books/fetchBooks',
    async (id)=>{
        const response = await axios.get(`https://632e1123b37236d2ebe5af2c.mockapi.io/users/${id}/books`)
        const data = await response.data
        return data
    }
)

export const addBook = createAsyncThunk(
    'app/books/addBook',
    async(book)=>{
        try{
            const response = await axios.post(`https://632e1123b37236d2ebe5af2c.mockapi.io/users/${book.user_id}/books`, book)
            const data = await response.data
            return data
        }catch(error){
            console.log(error)
        }

    }
)

export const updateBook = createAsyncThunk(
    'app/books/updateBook',
    async (book) => {
      try {
        const response = await axios.put(
          `https://632e1123b37236d2ebe5af2c.mockapi.io/users/${book.user_id}/books/${book.id}`,
          book
        );
        const data = await response.data;
        console.log(data)
        return data;
      } catch (error) {
        console.log(error)
      }
    }
);
export const deleteBook = createAsyncThunk(
    'app/books/deleteBook',
    async(book)=>{
        try{
            const reponse = await axios.delete(`https://632e1123b37236d2ebe5af2c.mockapi.io/users/${book.user_id}/books/${book.id}`)
            const data = await reponse.data
            return data
        }catch(error){
            console.log(error)
        }
    }
)

const initialState = {
    books:[],
    modal:{
        type: "",
        open: false,
        data: null
    },
    author:{},
    status:null,
    error:null
}
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        setAuthor(state, action){
            state.author = action.payload
        },
        openNewBookModal(state){
            state.modal = {
                type: "new",
                open: true,
                data: null
            }
        },
        closeNewBookModal(state){
            state.modal = {
                type: "",
                open: false,
                data: null
            }
        },
        openUpdateBookModal (state, action){
            state.modal = {
                type: "update",
                open:true,
                data: action.payload
            }
        },
        closeUpdateBookModal(state){
            state.modal = {
                type: "",
                open : false, 
                data: null
            }
        }
    },
    extraReducers:{
        [fetchBooks.pending]:(state)=>{
            state.status = "loading"
            state.error=null
        },
        [fetchBooks.fulfilled]:(state, action)=>{
            state.status = "resolved"
            state.books = action.payload
        }
    }
})
export const selectedBooks = (state)=>state.books.books
export const selectedAuthor = (state)=>state.books.author
export const selectedModalBooks = (state)=>state.books.modal
export const {setAuthor, openNewBookModal, closeNewBookModal, openUpdateBookModal, closeUpdateBookModal } = booksSlice.actions
export default booksSlice.reducer