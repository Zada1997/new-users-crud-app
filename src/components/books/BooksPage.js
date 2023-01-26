import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchReviews, setOpenBook } from '../reviews/reviewsRedux/reviewsSlice'
import { openUpdateBookModal, selectedBooks, deleteBook } from './booksRedux/booksSlice'
import "./BooksPage.css"

const BooksPage = () => {
    const books = useSelector(selectedBooks)
    const dispatch = useDispatch()


    const openReviews = (book)=>{
        dispatch(fetchReviews(book))
        dispatch(setOpenBook(book))
    }
  return (
    <div>
        {books && books.map(book=><div key={book.id} className="book-card">
            <img src={book.cover} alt="" />
            <Link to="/reviews"  onClick={()=>openReviews(book)}>
            <p>{book.title}</p>
            </Link>
            <p>{book.genre}</p>
            <p>{book.description}</p>
            <div>
                <button onClick = {()=>dispatch(openUpdateBookModal(book))}>Update</button>
                <button onClick={()=>dispatch(deleteBook(book))}>Delete</button>
            </div>

        </div>
        )}

    </div>
  )
}

export default BooksPage