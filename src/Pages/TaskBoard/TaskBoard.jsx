import React, { useEffect, useState } from 'react';
import TaskManager from '../TaskManager/TaskManager';
import TaskList from '../TaskList/TaskList';
import { fetchTasks } from '../../Services/taskService';

const TaskBoard = () => {
  const [tasks,setTasks]= useState([])
  const [filterTask, setFilteredTasks]= useState([])
  const [filterStatus,  setFilterStatus]= useState('all') 
  const [selectedDate, setSelectedDate] = useState('');
  
  
  useEffect(()=>{
    const gettasks = async()=>{
      const allTasks = await fetchTasks()
     
      console.log(allTasks);
      setTasks(allTasks)
      filterTasks(allTasks,filterStatus)
    }
    gettasks()
  },[])
  const filterTasks = (allTasks, status) => {
    if (status === 'all') {
      setFilteredTasks(allTasks);
    } else {
      const filtered = allTasks.filter(task => task.status === status);
      setFilteredTasks(filtered);
    }
  };
  const handleTaskAdded = (newtask)=>{
    setTasks((prevTask)=>[...prevTask,newtask])
    setFilteredTasks((prevTask)=> [...prevTask,newtask])
  }

  const handleStatusChange = (e) => {
    const status = e.target.value;
    setFilterStatus(status);
    filterTasks(tasks, status);  
  };
 
  const handleSortByDate = (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    if (!date) return;

    const sortedTasks = filterTask.filter(task => {
      const taskDueDate = new Date(task.dueDate);
      const inputDate = new Date(date);
      return taskDueDate <= inputDate;
    });
console.log('sorted task',sortedTasks);
    setFilteredTasks(sortedTasks);
  };
  const modalclose=()=>{
    document.getElementById('my_modal_5').close();
  }
    return (

       <div className='flex bg-blue-100'>
         <div>
<button className="btn p-3 m-6 bg-blue-700 text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>+ Add Task</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <TaskManager modalclose={modalclose} ></TaskManager>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
        <div className='my-6'>
          <div>
            <div>
            <label htmlFor="">Filter by status:   </label>
          <select className='border p-2' id="statusFilter" value={filterStatus} 
          
          onChange={handleStatusChange}
          
          >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
            </div>
            <div>
          {/* Sort by Due Date */}
          <label htmlFor="dueDateSort">Sort by date:    </label>
          <input className='border p-1 my-2' type="date" value={selectedDate} onChange={handleSortByDate} />
        </div>
          </div>
        <div>
            <TaskList filterTask={filterTask}></TaskList>
        </div>
        </div>
       
        
       </div>
    );
};

export default TaskBoard;