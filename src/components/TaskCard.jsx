import React from "react";
import "../styles/TaskCard.css";

const TaskCard = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description || "No description provided."}</p>
      <div className="task-actions">
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
