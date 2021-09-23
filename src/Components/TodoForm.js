import React, {useState} from 'react'

import{
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
} from "reactstrap"

import {v4} from "uuid"

//methods can also be passed into the prop

export default function TodoForm({addTodos}) {

  const [todoString, setTodoString] = useState("");

  const handleSubmit = e =>{

    e.preventDefault();
   
    if(todoString === ""){
    
       return alert("Please enter todo")

    }

    const todo = {
      todoString,
      id: v4()
    }
   
    addTodos(todo)

    setTodoString("")
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter a todo"
          value={todoString}
          onChange= {e =>setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="info">
              Add Todo
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    
    </Form>

  )
}
