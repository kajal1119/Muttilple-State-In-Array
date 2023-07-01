import React from "react";

const TaskCard = ({ task, info, handleDelete }) => {
  return (
    <li className={task.completed ? "completed" : "incomplete"}>
      <span>
        {task.id} {info} - {task.name}
      </span>
      <button onClick={() => handleDelete(task.id)} className="delete">
        Delete
      </button>
    </li>
  );
};

export default TaskCard;
