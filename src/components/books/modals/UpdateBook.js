import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeUpdateBookModal,  fetchBooks,  selectedModalBooks, updateBook } from '../booksRedux/booksSlice';

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

export default function UpdateBook() {
    const dispatch = useDispatch()
    const modal = useSelector(selectedModalBooks)


    const [title, setTitle] = useState(modal.data.title)
    const [genre, setGenre] = useState(modal.data.genre)
    const [desc, setDesc] = useState(modal.data.description)
    const [cover, setCover] = useState(modal.data.cover)
    const [isbn, setIsbn] = useState(modal.data.isbn)
    const [edition, setEdition] = useState(modal.data.edition)

    const handleSubmit = (e)=>{
      e.preventDefault()
      const updatedBook = {
        title: title,
        genre: genre,
        description: desc,
        cover: cover,
        isbn: isbn,
        edition: edition,
        user_id: modal.data.user_id,
        id: modal.data.id,
        createdAt: modal.data.createdAt,
      }
      dispatch(updateBook(updatedBook))
      dispatch(closeUpdateBookModal())
      dispatch(fetchBooks())
    }



  return (
    <div>
      <Modal
        open={modal.open}
        onClose = {()=>dispatch(closeUpdateBookModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit ={handleSubmit}>
            <TextField label="title" value={title} onChange = {(e)=>setTitle(e.target.value)} required />
            <TextField label="genre" value={genre} onChange = {(e)=>setGenre(e.target.value)} required/>
            <TextField label="description" value={desc} onChange = {(e)=>setDesc(e.target.value)} required/>
            <TextField label="cover" value={cover} onChange = {(e)=>setCover(e.target.value)} required/>
            <TextField label="isbn"  value={isbn} onChange = {(e)=>setIsbn(e.target.value)} required/>
            <TextField label="edition" value={edition} onChange = {(e)=>setEdition(e.target.value)} required/>
            <br/>
            <Button type = "submit">Update</Button>
            <Button onClick = {()=>dispatch(closeUpdateBookModal())}>Cancel</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}