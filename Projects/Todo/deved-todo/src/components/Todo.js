import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.isDone ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button onClick={completedTodo} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodo} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
