import React from 'react'
import { useSelector } from 'react-redux'
import ReviewsPage from './ReviewsPage'
import { openedBook } from './reviewsRedux/reviewsSlice'
import { Link } from 'react-router-dom'

const Reviews = () => {
    const book = useSelector(openedBook)
  return (
    <div>
        <Link to ="/">Back to Users</Link>
        {book && <div>
            <h1>{book.title}</h1>    
        </div>}
        <ReviewsPage/>
    </div>
  )
}

export default Reviews