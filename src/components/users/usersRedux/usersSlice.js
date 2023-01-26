import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = `https://632e1123b37236d2ebe5af2c.mockapi.io/users`

export const fetchUsers = createAsyncThunk(
    'app/users/fetchUsers',
    async ()=>{
        const response = await axios.get(api)
        const data = await response.data
        return data
    }
)

export const addUSer = createAsyncThunk(
    'app/users/addUser',
    async (user) => {
      try {
        const response = await axios.post(api, user);
        const data = await response.data;
        return data;
      } catch (error) {
        console.log(error)
      }
    }
  );

export const updateUser = createAsyncThunk(
    'app/users/updateUser',
    async (user) => {
      try {
        const response = await axios.put(
          `${api}/${user.id}`,
          user
        );
        const data = await response.data;
        return data;
      } catch (error) {
        console.log(error)
      }
    }
);

export const deleteUser = createAsyncThunk(
    'app/users/deleteUser',
    async (userId)=>{
            const response = await axios.delete(api + "/" + userId)
            const data = await response.data
            return data

    }
)
const initialState = {
    users: [],
    loggedinUser:{},
    status:null,
    error:null,
    access: false,
    searchText:"",
    modal : {
        type: "",
        open:false,
        data:null
    },
}


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        authLogin(state, action){
            state.access = action.payload
        },
        setSearchText(state, action){
            state.searchText = action.payload
        },
        addLoggedinUser(state, action){
            state.loggedinUser = action.payload
        },
        openAddNewModal(state){
            state.modal={
                type:"new",
                open:true,
                data:null
            }
        },
        closeAddNewModal(state){
            state.modal = {
                type:"",
                open:false,
                data:null
            }
        },
        openUpdateModal(state,action){
            state.modal = {
                type:"update",
                open: true,
                data: action.payload
            }
        },
        closeUpdateModal(state){
            state.modal = {
                type:"",
                open:false,
                data:null
            }
        },

    },
    extraReducers:{
        [fetchUsers.pending]: (state) =>{
            state.status = "loading"
            state.error = null
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            state.status = "resolved"
            state.users = action.payload
        },
        [deleteUser.fulfilled]:(state,action)=>{
            state.users.filter(todo => todo.id !== action.payload)
        }
    }
})
export const {
    authLogin, 
    addLoggedinUser, 
    setSearchText,
    openUpdateModal, 
    closeUpdateModal,
    openAddNewModal,
    closeAddNewModal,
} = usersSlice.actions
export const selectAllUsers = (state)=>state.users.users
export const access = (state)=>state.users.access
export const currentUser = (state)=>state.users.loggedinUser
export const modalUsers = (state)=>state.users.modal
export const loading = (state)=>state.users.loading
export const search = (state)=>state.users.searchText
export const loadingStatus = (state)=>state.users.status

export default usersSlice.reducer

