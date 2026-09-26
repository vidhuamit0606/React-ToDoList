import React, { useState } from "react";
import TodoList from "./TodoList";
import "./styles.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="container">
            <h1>React To-Do App</h1>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
        </div>
    );
};

export default App;
