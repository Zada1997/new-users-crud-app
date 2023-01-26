import React from 'react'
import { useSelector } from 'react-redux'
import { selectedAuthor } from './booksRedux/booksSlice'

const BooksAuthor = () => {
    const author = useSelector(selectedAuthor)
  return (
    <div>
        <h1>{author.firstname}</h1>
    </div>
  )
}

export default BooksAuthor