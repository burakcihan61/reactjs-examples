import React, { useContext } from "react";
import TodoContext from "../ContextAPI/TodoContext";
import { v4 as uuidv4 } from "uuid";

const TodoContexExam = () => {
  const { todo, todos, setTodo, setTodos } = useContext(TodoContext);
  const onChangeInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodos = () => {
    if (todo.todox === "" || todo.datex === "") {
      return false;
    }
    setTodos([...todos, todo]);
    setTodo({ id: uuidv4(), todox: "", datex: "" });
  };

  const handleDeleteClick = (id) => {
    const newList = todos.filter((item) => item.id !== id);

    setTodos(newList);
  };

  return (
    <div>
      <div>
        <input
          name="todox"
          value={todo.todox}
          type="text"
          onChange={onChangeInput}
        />
        <input
          name="datex"
          value={todo.datex}
          type="date"
          onChange={onChangeInput}
        />
        <button onClick={addTodos}>ADD TODO</button>
      </div>
      <div>
        <ul>
          {todos.map((items, index) => (
            <li key={index}>
              {items.id} {items.todox} - {items.datex}
              <span>
                <button onClick={() => handleDeleteClick(items.id)}>
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoContexExam;
