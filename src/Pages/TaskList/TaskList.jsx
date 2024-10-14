

import React, { useState, useEffect } from 'react';
import { deleteTask, fetchTasks } from '../../Services/taskService';
import EditTaskModal from '../../MainLayout/EditTaskModal';


const TaskList = ({filterTask}) => {
  const [tasks, setTasks] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [editingTask, setEditingTask] = useState(null); 
  useEffect(() => {
    const getTasks = async () => {
      const taskData = await fetchTasks();
      setTasks(taskData);  
      setLoading(false); 
    };
    getTasks();
  }, []);
  const handleDelete=async(taskId)=>{
    const windowDelete= window.confirm("Are you want to sure to Delete Task?")
    if(windowDelete){
      await deleteTask(taskId)
      setTasks(tasks.filter(task=> task.id != taskId));
    }
    
  }
  

  if (loading) {
    return <div className='w-full flex justify-center items-center h-96'><span className=" loading  loading-spinner loading-lg"></span></div>; 
  }
  const handleEdit = (task) => {
    setEditingTask(task);  // Set the task being edited
  };
  return (
    <div>
      <h2 className='my-4'>Task List</h2>
      <ul className='text-black border p-2'>
        {filterTask.map((task) => (
          
          <li className='my-3 bg-pink-300 p-2' key={task.id}>
          
          <div className='flex justify-between gap-2'>
          <strong>{task.title}</strong>
            <div>
            <input className='' type="checkbox" />
            <span>Completed</span>
            </div>
          </div>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            <div className='flex gap-2 items-center'><button onClick={()=>handleDelete(task.id)} className='btn'>Delete</button>
            <EditTaskModal handleEdit={handleEdit} task={task} onUpdate={() => setTasks(tasks)}></EditTaskModal></div>
          </li>
          
        ))}
        
      </ul>
    </div>
  );
};

export default TaskList;
