import React, {useState, useEffect} from 'react'
import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Todos from "./Components/Todos"
import TodoForm from "./Components/TodoForm"
import logo from './logo.svg';

export default function App() {

  const [todos, setTodos] = useState([])

  //set todos from localstorage to state before rendering component

  useEffect(()=>{
    const localTodos = localStorage.getItem("todos")
    //check what's in localstorage this a huge object
    console.log({localTodos});
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  }, []) 

  //useEffect requires a call back and second list of dependencies //here it's array(compulsory) 

  //loading enter array and updating with todo
  const addTodos = async todo =>{
    setTodos([...todos, todo])
  }

  //if there is a change in todos then set the todos in localstorage
  //needs to do something after rendering
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  //discard id and create new todos list and set into state then it goes to localstorage
  const markComplete = id =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <Container fluid>
    <img src ={logo} className="App-logo" alt="logo"/>
    <h1>Todo with local storage</h1>
    <TodoForm addTodos={addTodos}/>
    <Todos todos={todos} markComplete={markComplete}/>
    
    </Container>
  )
}
