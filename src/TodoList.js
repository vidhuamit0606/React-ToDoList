import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleTask }) => {
    return (
        <ul className="todo-list">
            {tasks.length === 0 ? <p>No tasks yet!</p> : 
                tasks.map((task) => (
                    <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
                ))
            }
        </ul>
    );
};

export default TodoList;
