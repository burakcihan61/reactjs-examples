import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todo, setTodo] = useState({
    id: uuidv4(),
    todoName: "",
    dateName: "",
  });

  const [todos, setTodos] = useState([
    { id: uuidv4(), todoName: "Javascript", dateName: "2023-01-04" },
    { id: uuidv4(), todoName: "ReactJS", dateName: "2023-01-05" },
    { id: uuidv4(), todoName: "NodeJS", dateName: "2023-01-04" },
    { id: uuidv4(), todoName: "VueJS", dateName: "2023-01-04" },
    { id: uuidv4(), todoName: "JQuery", dateName: "2023-01-04" },
    { id: uuidv4(), todoName: "Angular", dateName: "2023-01-04" },
  ]);
  const [filterDate, setFilterDate] = useState("");

  const onChangeTodoInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };


  const onClickAddTodo = () => {
    setTodos([...todos, todo]);
    setTodo({
      id: uuidv4(),
      todoName: "",
      dateName: "",
    });
  };

  const filtered = todos.filter((items) => {
    return items.dateName.includes(filterDate);
  });

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="App">
      <div>
        <div>
          <input
            type="text"
            value={todo.todoName}
            name="todoName"
            onChange={onChangeTodoInput}
          />
          <input
            type="date"
            value={todo.dateName}
            name="dateName"
            onChange={onChangeTodoInput}
          />
          <button onClick={onClickAddTodo}>Add Todo</button>
        </div>
        <div>
          <h3>FİLTER</h3>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
        <hr />
        <div>
          <ul>
            {filtered.map((items, index) => (
              <li key={index}>
                {items.todoName} - {items.dateName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
