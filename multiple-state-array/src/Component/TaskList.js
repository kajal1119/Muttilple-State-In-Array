import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ info }) => { // <-- Add curly braces to destructure the props
  const [tasks, setTasks] = useState([
    { id: 1, name: "Kajal", completed: true },
    { id: 2, name: "PM", completed: false },
    { id: 3, name: "Pritam", completed: true },
  ]);
  const [show, setShow] = useState(true);
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="App">
        <h1>Task List</h1>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        <ul>
          {show &&
            tasks.map((task, index) => (
              <TaskCard
                key={index}
                task={task}
                info={info}
                handleDelete={handleDelete}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
