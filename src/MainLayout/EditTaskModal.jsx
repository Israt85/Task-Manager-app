import React, { useState } from 'react';
import { updateTask } from '../Services/taskService';

const EditTaskModal = ({task,onUpdate,handleEdit }) => {
    const [title, setTitle] = useState(task?.title||'');
    const [description, setDescription] = useState(task?.description||'');
    const [dueDate, setDueDate] = useState(task?.dueDate||'');
  console.log(task);
   const handlesubmit=async(e)=>{
    e.preventDefault()
    console.log('task id', task.id);
    const updatedData= { title, description, dueDate };
    await updateTask(task.id, updatedData)
    onUpdate()
    console.log(title);
    document.getElementById('my_modal_4').close(); 
    

   }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Edit</button>
<dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handlesubmit} >
        <div className=" flex flex-col lg:flex-row w-full gap-2 justify-between">
          <label className="label w-10 ">
            <span className="label-text">Title: </span>
          </label>
          <input defaultValue={title} onChange={(e) => setTitle(e.target.value)} type="text"className="py-1 px-2 rounded-md w-full" required />
        </div>
        <div className=" flex flex-col lg:flex-row w-full gap-2 justify-between">
          <label className="label w-20 ">
            <span className="label-text">Description: </span>
          </label>
          <input defaultValue={description} onChange={(e) => setDescription(e.target.value)} type="text"className="py-1 px-2 rounded-md w-full" required />
        </div>
        <div className=" flex flex-col lg:flex-row w-full gap-2 justify-between">
          <label className="label w-10 ">
            <span className="label-text">Date: </span>
          </label>
          <input type="date" defaultValue={dueDate} onChange={(e) => setDueDate(e.target.value)}  className="py-1 px-2 rounded-md w-full" required />
        </div>
        <div></div>
    <div className='flex justify-center items-center my-2'><button onClick={()=>handleEdit(task)} className='btn btn-outline' type="submit">Update Task</button></div>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default EditTaskModal;