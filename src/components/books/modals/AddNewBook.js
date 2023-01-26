import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectedModalBooks,closeNewBookModal, selectedAuthor, addBook } from '../booksRedux/booksSlice';

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

export default function AddNewBook() {
    const dispatch = useDispatch()
    const modal = useSelector(selectedModalBooks)
    const author = useSelector(selectedAuthor)


    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [desc, setDesc] = useState("")
    const [cover, setCover] = useState("")
    const [isbn, setIsbn] = useState("")
    const [edition, setEdition] = useState("")

    const onSubmitFn = (e) => {
        e.preventDefault()
        const newBook = {
            title: title,
            genre: genre,
            description: desc,
            cover: cover,
            isbn: isbn,
            edition: edition,
            user_id: author.id
        }
        dispatch(addBook(newBook))
        dispatch(closeNewBookModal())
    }

  return (
    <div>
      <Modal
        open={modal.open}
        onClose = {()=>dispatch(closeNewBookModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={onSubmitFn}>
            <TextField label="title" value={title} onChange = {(e)=>setTitle(e.target.value)} required />
            <TextField label="genre" value={genre} onChange = {(e)=>setGenre(e.target.value)} required/>
            <TextField label="description" value={desc} onChange = {(e)=>setDesc(e.target.value)} required/>
            <TextField label="cover" value={cover} onChange = {(e)=>setCover(e.target.value)} required/>
            <TextField label="isbn"  value={isbn} onChange = {(e)=>setIsbn(e.target.value)} required/>
            <TextField label="edition" value={edition} onChange = {(e)=>setEdition(e.target.value)} required/>
            <br/>
            <Button type = "submit">Add</Button>
            <Button onClick = {()=>dispatch(closeNewBookModal())}>Cancel</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}