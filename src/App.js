import './App.css';
import Login from './components/Auth/Login';
import Users from './components/users/UsersPage/Users';
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, access, addLoggedinUser } from "./components/users/usersRedux/usersSlice"

function App() {
  const accessToLogin = useSelector(access)
  const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchUsers())
    },[dispatch])

  return (
    <div className="App">
      {accessToLogin?<Users/>:<Login />}
    </div>
  );
}

export default App;
