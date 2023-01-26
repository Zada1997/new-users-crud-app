import React, { useState } from 'react'
import UsersPage from "./UsersPage"
import Search from "./Search"
import { useDispatch, useSelector } from 'react-redux'
import { loadingStatus, modalUsers, openAddNewModal, selectAllUsers } from '../usersRedux/usersSlice'
import UpdateUser from '../modals/UpdateUser'
import { Button } from '@mui/material'
import AddNewUser from '../modals/AddNewUser'
import "./Users.css"

const Users = () => {
  const modal = useSelector(modalUsers)
  const status = useSelector(loadingStatus)
  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch()
  const [filteredUsers, setFilteredUsers] = useState([])


  const searchUsers = (text)=>{
      const copyUsers = [...users]
      const filtered = copyUsers.filter(user=>text.length && (user.firstname || user.email || user.lastname).toLowerCase().includes(text.toLowerCase()))
      setFilteredUsers(filtered)

      console.log(text)
      console.log(filteredUsers)
  }
    
  return (
    <div className='users-page'>
        {modal.type === "new"? <AddNewUser/>: modal.data && <UpdateUser/>}
        <Search searchUsers={searchUsers}/>
        {status === "loading" ? <h1>LOADING...</h1>
        :
        <>
        <Button onClick ={()=>dispatch(openAddNewModal())}>Create New User</Button>
        
        <UsersPage filteredUsers={filteredUsers} />
        </>
        
      }
    </div>
  )
}

export default Users