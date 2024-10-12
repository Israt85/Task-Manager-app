import React from 'react';
import TaskManager from '../TaskManager/TaskManager';
import TaskList from '../TaskList/TaskList';

const TaskBoard = () => {
    return (
       <div className='flex items-center'>
         <div>
<button className="btn p-3 m-32" onClick={()=>document.getElementById('my_modal_5').showModal()}>+ Add Task</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <TaskManager></TaskManager>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
        <div>
            <TaskList></TaskList>
        </div>
       </div>
    );
};

export default TaskBoard;