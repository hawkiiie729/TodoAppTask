// App.js
import React, { useState } from "react";
import Todo from "./Component/Todo";
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const addTask = () => {
    if (inputTask.trim() !== "") {
      setTasks([...tasks, inputTask]);
      setInputTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <div className="add-task">
        <input
          type="text"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="todo-item">
            <span>{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
