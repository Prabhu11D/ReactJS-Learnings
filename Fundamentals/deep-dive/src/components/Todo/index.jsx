import { useState } from "react"


const TodoItem = ({text, isDone}) => {
  return (
    <div>
      <p>{isDone}</p>
      <h3>{text}</h3>
    </div>
  )
}

const Todo = () => {
  const [newId, setNewId] = useState(1);
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState({
    id: "todo-" + newId,
    text: "",
    isDone: false,
  });

  const addTodo = (e) => {
    console.log(newTodo);
    setTodos(prev => ([
      ...prev, newTodo
    ]));
    setNewId(id => {
      let newId = ++id;
      setNewTodo({
        id: "todo-" + newId,
        text: "",
        isDone: false
      });
      return id;
    });
  }

  return (
    <div>
      <div>
        <input type="text" 
               value={newTodo.text} 
               placeholder="Enter Todo" 
               onChange={(e) => setNewTodo(prev => ({
                                      ...prev, text: e.target.value
                        }))}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <br />
      {console.log(todos)}
      {todos.map(todo => <TodoItem key={todo.id} text={todo.text} isDone={todo.isDone} />)}
    </div>
  )
}

export default Todo