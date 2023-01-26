import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser, deleteUser, selectAllUsers, openUpdateModal} from '../usersRedux/usersSlice'
import { Button, Grid } from '@mui/material'
import "./UsersPage.css"
import { Link } from 'react-router-dom'
import { fetchBooks, setAuthor } from '../../books/booksRedux/booksSlice'

const UsersPage = ({filteredUsers}) => {
    const users = useSelector(selectAllUsers)
    const loggedinUser = useSelector(currentUser)
    const dispatch = useDispatch()

    const openAuthorBooks = (author) =>{
      dispatch(fetchBooks(author.id))
      dispatch(setAuthor(author))

    }
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
    {(filteredUsers.length > 0 ? filteredUsers: users).map(user=>(
      <Grid container spacing={1}  className = "grid-body"  key = {user.id}>
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
      <Link to ="/books" onClick={()=>openAuthorBooks(user)}>
        {user.email}
      </Link>
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