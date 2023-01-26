import React from 'react'
import { useSelector } from 'react-redux'
import { selectedReviews } from './reviewsRedux/reviewsSlice'

const ReviewsPage = () => {
    const reviews = useSelector(selectedReviews)
  return (
    <div>
        {reviews && reviews.map(review => <div key={review.id}>
            <h1>{review.text}</h1>
        </div>)}
    </div>
  )
}

export default ReviewsPage