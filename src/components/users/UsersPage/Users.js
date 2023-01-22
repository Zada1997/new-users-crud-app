import React, { useState } from 'react'
import UsersPage from "./UsersPage"
import Search from "./Search"
import { useDispatch, useSelector } from 'react-redux'
import { modalUsers, openAddNewModal, selectAllUsers } from '../usersRedux/usersSlice'
import UpdateUser from '../modals/UpdateUser'
import { Button } from '@mui/material'
import AddNewUser from '../modals/AddNewUser'
import "./Users.css"


const Users = () => {
  const modal = useSelector(modalUsers)
  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch()
  const [filteredUsers, setFilteredUsers] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  const searchUsers = (text)=>{
    const copyUsers = [...users]
    const filtered = copyUsers.filter(user=>(user.firstname || user.email || user.lastname).toLowerCase().includes(text.toLowerCase()))
    setFilteredUsers(filtered)
    filteredUsers.length > 0 ? setIsEmpty(false) : setIsEmpty(true)
  }
    
  return (
    <div className='users-page'>
        {modal.type === "new"? <AddNewUser/>: modal.data && <UpdateUser/>}
        <Search searchUsers={searchUsers}/>
        <Button onClick ={()=>dispatch(openAddNewModal())}>Create New User</Button>
        {isEmpty ? <h3>No Users Found</h3>:<UsersPage filteredUsers={filteredUsers}/>}
        
    </div>
  )
}

export default Users