import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState({ id: uuidv4(), todox: "", datex: "" });
  const [todos, setTodos] = useState([
    { id: uuidv4(), todox: "Javascript", datex: "2023-01-04" },
    { id: uuidv4(), todox: "ReactJS", datex: "2023-01-05" },
    { id: uuidv4(), todox: "NodeJS", datex: "2023-01-04" },
    { id: uuidv4(), todox: "NodeJS", datex: "2023-01-04" },
    { id: uuidv4(), todox: "NodeJS", datex: "2023-01-04" },
    { id: uuidv4(), todox: "NodeJS", datex: "2023-01-04" },
  ]);
  const values = { todo, setTodo, todos, setTodos };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
