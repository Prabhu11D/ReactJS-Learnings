import React, { useState, useEffect } from "react";
import "./style.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  useEffect(() => {
    filterTodo();
    savetoLocalStorage();
  }, [todos, status]);

  const savetoLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const filterTodo = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todos.filter((todo) => todo.isDone === true));
        break;
      case "uncompleted":
        setFilteredTodo(todos.filter((todo) => todo.isDone === false));
        break;
      default:
        setFilteredTodo(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h2>Prabhu's Todo List</h2>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList todos={filteredTodo} setTodos={setTodos} />
    </div>
  );
}

export default App;
