import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  selectFiltredTodos,
} from "../redux/todosSlice";

let filtered = [];
const TodoList = () => {
  const dispatch = useDispatch();
  const filtredTodos = useSelector(selectFiltredTodos);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeTodo({ id: id }));
    }
  };

  return (
    <ul className="todo-list">
      {filtredTodos.map((item) => (
        <li className={item.completed ? "completed" : ""} key={item.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggleTodo({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
