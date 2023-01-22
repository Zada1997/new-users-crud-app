import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddNewModal, modalUsers, addUSer, fetchUsers } from '../usersRedux/usersSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddNewUser() {
    const dispatch = useDispatch()
    const modal = useSelector(modalUsers)


    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState("")
    const [birthdate, setbirthdate] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMes, setErrorMes] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(password === confirmPassword){
            const newUser = {
                firstname: fname,
                lastname: lname,
                email: email,
                avatar: avatar,
                birthdate: birthdate,
                password: password,
            }
            dispatch(addUSer(newUser))
            dispatch(closeAddNewModal())
            dispatch(fetchUsers())
        }else{
            setErrorMes(true)
            setTimeout(()=>setErrorMes(false),2000)
        }
    }

  return (
    <div>
      <Modal
        open={modal.open}
        onClose = {()=>dispatch(closeAddNewModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            {errorMes && <p>Password doesn't match</p>}
            <TextField label="First Name" value={fname} onChange = {(e)=>setFname(e.target.value)} required />
            <TextField label="Last Name" value={lname} onChange = {(e)=>setLname(e.target.value)} required/>
            <TextField label="Email" value={email} onChange = {(e)=>setEmail(e.target.value)} required/>
            <TextField label="Avatar Link" value={avatar} onChange = {(e)=>setAvatar(e.target.value)} required/>
            <TextField label="Birthdate" type = "date" value={birthdate} onChange = {(e)=>setbirthdate(e.target.value)} required/>
            <TextField label="Password" value={password} type="password" onChange = {(e)=>setPassword(e.target.value)} required/>
            <TextField label="Confirm Password" value={confirmPassword} type="password" onChange = {(e)=>setConfirmPassword(e.target.value)} required/>
            <br/>
            <Button type = "submit">Add</Button>
            <Button onClick = {()=>dispatch(closeAddNewModal())}>Cancel</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}