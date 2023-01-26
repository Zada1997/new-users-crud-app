import './App.css';
import Login from './components/Auth/Login';
import Users from './components/users/UsersPage/Users';
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, access, addLoggedinUser } from "./components/users/usersRedux/usersSlice";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Books from './components/books/Books';
import  Reviews  from './components/reviews/Reviews';

function App() {
  const accessToLogin = useSelector(access)
  const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchUsers())
    },[dispatch])

  return (
    <div className="App">
      {accessToLogin?
      <Router>
        <Routes>
            <Route exact path = "/"  element={<Users/>}/> 
            <Route path = "/books" element={<Books/>}/> 
            <Route path ="/reviews" element={<Reviews/>}/>
        </Routes>
      </Router>
      :
       <Login />
      } 
    </div>
  );
}

export default App;
