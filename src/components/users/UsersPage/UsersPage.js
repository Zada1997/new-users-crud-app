import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser, deleteUser, selectAllUsers, openUpdateModal} from '../usersRedux/usersSlice'
import { Button, Grid } from '@mui/material'
import "./UsersPage.css"

const UsersPage = ({filteredUsers}) => {
    const users = useSelector(selectAllUsers)
    const loggedinUser = useSelector(currentUser)
    const dispatch = useDispatch()
  return (
    <div className='userspage-container'>
    <Grid container spacing={1} className="grid-header">
      <Grid item xs={2}>
        Avatar
      </Grid>
      <Grid item xs={2}>
        First Name
      </Grid>
      <Grid item xs={2}>
        Last Name
      </Grid>
      <Grid item xs={2}>
        Email
      </Grid>
      <Grid item xs={2}>
        Birthdate
      </Grid>
      <Grid item xs={2}>
        Actions
      </Grid>
    </Grid>
    {(filteredUsers?filteredUsers:users).map(user=>(
    <Grid container spacing={1} key = {user.id} className = "grid-body">
      <Grid item xs={2}>
        <img src={user.avatar} alt={user.email} />
      </Grid>
      <Grid item xs={2}>
        {user.firstname}
      </Grid>
      <Grid item xs={2}>
        {user.lastname}
      </Grid>
      <Grid item xs={2}>
        {user.email}
      </Grid>
      <Grid item xs={2}>
        {user.birthdate}
      </Grid>
      <Grid item xs={2}>
        {(user.id === loggedinUser.id) && <div className='users-btns-wrapper'>
            <Button className="user-update-btn" onClick={()=>dispatch(openUpdateModal(user))}>Update</Button>
            <Button className ="user-delete-btn" onClick = {()=>dispatch(deleteUser(user.id))}>Delete</Button>
          </div>}
      </Grid>
        
    </Grid>
    ))}
    </div>
  )
}

export default UsersPage