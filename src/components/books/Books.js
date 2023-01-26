import React from 'react'
import BooksAuthor from './BooksAuthor'
import BooksPage from './BooksPage'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { openNewBookModal, selectedModalBooks } from './booksRedux/booksSlice'
import AddNewBook from './modals/AddNewBook'
import UpdateBook from './modals/UpdateBook'


const Books = () => {
    const modal = useSelector(selectedModalBooks)
    const dispatch = useDispatch()
  return (
    <div>
        {modal.type === "new" ? <AddNewBook/> : modal.data && <UpdateBook/>}
        <Link to ="/">Back to Users</Link>
        <BooksAuthor/>
        <Button onClick={()=>dispatch(openNewBookModal())}>Add a New Book</Button>
        <BooksPage/>
    </div>
  )
}

export default Books