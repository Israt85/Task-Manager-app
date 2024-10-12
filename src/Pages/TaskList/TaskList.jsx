

import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../../Services/taskService';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);  
  const [loading, setLoading] = useState(true);   
  useEffect(() => {
    const getTasks = async () => {
      const taskData = await fetchTasks();
      setTasks(taskData);  
      setLoading(false); 
    };
    getTasks();
  }, []); 
  if (loading) {
    return <div>Loading tasks...</div>; 
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul className='text-black border p-2'>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
