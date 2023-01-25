import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFiltredTodos,
  getTodosAsync,
  toggleTodoAsync,
  deleteTodoAsync,
} from "../redux/todosSlice";
import Loading from "./Loading";

let filtered = [];

const TodoList = () => {
  const dispatch = useDispatch();
  const filtredTodos = useSelector(selectFiltredTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTodoAsync(id));
    }
  };

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
  };
  if (isLoading) return <Loading />;

  if (error) return <div>{error}</div>;

  return (
    <ul className="todo-list">
      {filtredTodos.map((item) => (
        <li className={item.completed ? "completed" : ""} key={item.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id, !item.completed)}
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
