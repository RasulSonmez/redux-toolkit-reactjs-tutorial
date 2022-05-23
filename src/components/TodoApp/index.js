import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  add,
  remove,
  toggleCompleted,
  editTodo,
} from "../../features/TodoSlice";

function TodoApp() {
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
    <div>
      <div className="card p-5">
        <h1>Todo List</h1>
        {isEditing ? (
          <div className="form">
            <h2>Update your plan for today</h2>
            <input
              className="input"
              type="text"
              value={title}
              name="title"
              onChange={handleChange}
            ></input>
            <button type="button" className="btn btn-primary" onClick={onEdit}>
              Edit
            </button>
          </div>
        ) : (
          <div>
            <span>
              <input
                className="input"
                type="text"
                name="todo"
                value={todo}
                onChange={(e) => setTodo(e.currentTarget.value)}
              />

              <button className="btn btn-primary " onClick={onSave}>
                Save
              </button>
            </span>

            <ul className=" row mt-3">
              {todos.map((todo) => (
                <li
                  className="d-flex flex-row justify-content-between align-items-center mb-3 card"
                  key={todo.id}
                >
                  <span className={todo.completed ? "completed" : ""}>
                    - {todo.title}
                  </span>
                  <div>
                    <button
                      className="btn btn-danger "
                      onClick={() => onDelete(todo.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning "
                      onClick={() => toggle(todo.id)}
                    >
                      {todo.completed ? "completed" : "complete"}
                    </button>
                    <button
                      className="btn btn-success "
                      onClick={() => onEditToggle(todo.id, todo.title)}
                    >
                      Edit
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <Link className="nav-link" to="/">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default TodoApp;
