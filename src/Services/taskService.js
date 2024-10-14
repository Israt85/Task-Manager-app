

import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'; 
import { db } from '../../Firebase.config'; 
export const addTask = async (title, description, dueDate, status = 'pending') => {
  try {
    const docRef = await addDoc(collection(db, 'tasks'), {
      title: title,
      description: description,
      dueDate: dueDate,
      status: status,
      createdAt: new Date()
    });
    console.log("Task added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding task: ", error);
  }
};
export const fetchTasks = async () => {
    try {
      const tasksCol = collection(db, 'tasks'); 
      const taskSnapshot = await getDocs(tasksCol); 
      const taskList = taskSnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data() 
      })); 
      return taskList;
    } catch (error) {
      console.error("Error fetching tasks: ", error);
      return [];
    }
  };
export const deleteTask= async(taskId)=>{
  try{
    const taskDoc= doc(db, 'tasks', taskId);
    await deleteDoc(taskDoc)
    console.log("task deleted with Id", taskId)

  }
  catch(error){
    console.error("Error Deleteing Task", error)
  }
}

export const updateTask= async(taskId,updatedData)=>{
  try{

    const taskDocRef=doc(db, 'task',taskId)
    await(taskDocRef,updatedData)
    console.log('task updated',taskId)
  }
  catch(error){
    console.error("Error", error)
  }
}