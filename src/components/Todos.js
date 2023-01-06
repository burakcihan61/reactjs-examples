import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todo, setTodo] = useState({ id: uuidv4(), todox: "", datex: "" });
  const [todos, setTodos] = useState([
    { id: uuidv4(), todox: "Javascript", datex: "2023-01-04" },
    { id: uuidv4(), todox: "ReactJS", datex: "2023-01-05" },
    { id: uuidv4(), todox: "NodeJS", datex: "2023-01-04" },
    { id: uuidv4(), todox: "NodeJS", datex: "2023-01-04" },
    { id: uuidv4(), todox: "NodeJS", datex: "2023-01-04" },
    { id: uuidv4(), todox: "NodeJS", datex: "2023-01-04" },
  ]);
  const [filterDate, setFilterDate] = useState("");

  const onChangeInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodos = (e) => {
    if (todo.todox === "" || todo.datex === "") {
      return false;
    }
    setTodos([...todos, todo]);
    setTodo({ id: uuidv4(), todox: "", datex: "" });
  };

  const filtered = todos.filter((item) => item.datex.includes(filterDate));

  const handleDeleteClick = (id) => {
    const newList = todos.filter((item) => item.id !== id);

    setTodos(newList);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <div>
        <div>
          <input
            name="todox"
            value={todo.todox}
            type="text"
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            name="datex"
            value={todo.datex}
            type="date"
            onChange={onChangeInput}
          />
        </div>
        <button onClick={addTodos}>ADD</button>
        <div>
          <h5>Filter</h5>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
        <div>
          <ul>
            {filtered.map((items, index) => (
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
    </div>
  );
};

export default App;
