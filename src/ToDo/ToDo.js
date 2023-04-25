import { useState, useEffect } from "react";
import Form from "./Form";
import AddTodo from "./Add-Todo";
import { v4 as uuidv4 } from "uuid";
import { Container } from "@mui/material";
import './todo.css'

const ToDo = () => {
  const [todos, setTodos] = useState(
    !localStorage.getItem("todos-list")
      ? []
      : JSON.parse(localStorage.getItem("todos-list"))
  );

  //everytime todos list changes, save the current state to local storage
  useEffect(() => {
    localStorage.setItem("todos-list", JSON.stringify(todos));
  }, [todos]);
  const handleMark = (index) => {
    todos[index].isDone = !todos[index].isDone;
    setTodos([...todos]);
  };
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (index) => {
    //delete one item at index given
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const clearAllFinished = () => {
    setTodos(todos.filter((todo) => todo.isDone === false));
  };
  return (
    <Container className="container">
      <h2>Today's Tasks</h2>
      <br />
      <div className="todos-container">
        {todos.map((todo, index) => (
          <AddTodo
            key={uuidv4()}
            index={index}
            todo={todo}
            handleMark={handleMark}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <br />

      <Form addTodo={addTodo} clearAllFinished={clearAllFinished} />
    </Container>
  );
};

export default ToDo;