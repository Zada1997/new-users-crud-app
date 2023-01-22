import React, { useState } from 'react'
import {Button, TextField} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers, authLogin, addLoggedinUser, fetchUsers} from '../users/usersRedux/usersSlice'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Login.css"

const Login = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    users.filter(user =>{
      if(user.email === loginEmail && user.password === loginPassword){
      dispatch(authLogin(true))
      dispatch(addLoggedinUser(user))
      }
      return user

    })
  }
  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit} className="login-wrapper">
          <AccountCircleIcon sx={{ fontSize: 40 }}/>   
          <TextField className="login-input" label ="Email..." value = {loginEmail} onChange = {(e)=>setLoginEmail(e.target.value)} required/>
          <TextField className="login-input" type = "password" label ="Password..." value = {loginPassword} onChange = {(e)=>setLoginPassword(e.target.value)} required/>
          <Button type = "submit" id="login-btn">LOGIN</Button>
      </form>
    </div>
  )
}

export default Login