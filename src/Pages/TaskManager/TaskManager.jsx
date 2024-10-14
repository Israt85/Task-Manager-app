

import React, { useState } from 'react';
import { addTask } from '../../Services/taskService';


const TaskManager = ({modalclose}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(title, description, dueDate);
    modalclose()
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className=" flex flex-col lg:flex-row w-full gap-2 justify-between">
          <label className="label w-10 ">
            <span className="label-text">Title: </span>
          </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"className="py-1 px-2 rounded-md w-full" required />
        </div>
        <div className=" flex flex-col lg:flex-row w-full gap-2 justify-between">
          <label className="label w-20 ">
            <span className="label-text">Description: </span>
          </label>
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text"className="py-1 px-2 rounded-md w-full" required />
        </div>
        <div className=" flex flex-col lg:flex-row w-full gap-2 justify-between">
          <label className="label w-10 ">
            <span className="label-text">Date: </span>
          </label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}  className="py-1 px-2 rounded-md w-full" required />
        </div>
    <div className='flex justify-center items-center my-2'><button className='btn btn-outline' type="submit">Add Task</button></div>
    </form>
  );
};

export default TaskManager;
