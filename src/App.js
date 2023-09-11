import logo from './logo.svg';
import './App.css';

import {useEffect} from 'react'

import {useDispatch, useSelector} from "react-redux"

import { addTodo, removeTodo, fetchPosts } from './app/features/todo/todoSlice';
import { addUser, removeUser } from './app/features/user/userSlice';

function App() {

  const dispatch = useDispatch();
  const todoData = useSelector(state=>state.todosData)
  const userData = useSelector(state=>state.usersData)

  useEffect(()=>{
    dispatch(addTodo())
    dispatch(addUser())
    dispatch(fetchPosts())
  },[])
  

  console.log("todoData", todoData)
  console.log("userData", userData)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Learn Redux Toolkit
        </p>
      </header>
    </div>
  );
}

export default App;
