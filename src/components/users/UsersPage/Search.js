import { TextField, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { search, setSearchText } from '../usersRedux/usersSlice'

const Search = ({searchUsers}) => {
  const text = useSelector(search)
  const dispatch = useDispatch()
  return (
    <div>
        <TextField label="search..." value={text} onChange={ e => dispatch(setSearchText(e.target.value))}/>
        <Button onClick={()=>searchUsers(text)}>Search</Button>
    </div>
  )
}

export default Search