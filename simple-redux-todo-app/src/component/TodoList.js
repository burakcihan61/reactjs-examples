import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/todosSlice";

let filtered = [];
const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeTodo({ id: id }));
    }
  };
  filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((item) => {
      if (activeFilter === "active") {
        return !item.completed;
      } else if (activeFilter === "completed") {
        return item.completed;
      }
    });
  }
  return (
    <ul className="todo-list">
      {filtered.map((item) => (
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
