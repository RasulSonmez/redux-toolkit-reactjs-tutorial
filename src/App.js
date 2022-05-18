import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, toggleCompleted, editTodo } from "./features/todoSlice";
import "./App.css";

function App() {
  const todos = useSelector((state) => {
    return state.todos;
  });
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({});

  const onSave = (event) => {
    event.preventDefault();

    if (todo.trim().length === 0) {
      alert("Enter a task before adding !!");
      return;
    } else {
      dispatch(
        add({
          todos: todo,
        })
      );
      setTodo("");
    }
  };
  const onEditToggle = (id, title) => {
    setEditing(true);
    setState({
      ...state,
      id,
      title,
    });
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const { title, id } = state;

  const onEdit = () => {
    dispatch(editTodo({ title, id }));
    setEditing(false);
  };

  const onDelete = (id) => {
    dispatch(remove({ id: id }));
  };
  const toggle = (id) => {
    dispatch(toggleCompleted({ id: id }));
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      {isEditing ? (
        <div className="form">
          <h2>Update your plan for today</h2>
          <input
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
          ></input>
          <button type="button" className="button" onClick={onEdit}>
            Edit
          </button>
        </div>
      ) : (
        <div>
          <span>
            <input
              type="text"
              name="todo"
              value={todo}
              onChange={(e) => setTodo(e.currentTarget.value)}
            />

            <button onClick={onSave}>Save</button>
          </span>

          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span className={todo.completed ? "completed" : ""}>
                  - {todo.title}
                </span>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
                <button onClick={() => toggle(todo.id)}>
                  {todo.completed ? "completed" : "complete"}
                </button>
                <button onClick={() => onEditToggle(todo.id, todo.title)}>
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
