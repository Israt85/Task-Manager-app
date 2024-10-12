import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './MainLayout/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import AuthProvider from '../Provider/AuthProvider.jsx';
import TaskBoard from './Pages/TaskBoard/TaskBoard.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:'/login',
    element: <Login></Login>
  },{
    path:'/signup',
    element: <Signup></Signup>
  },{
    path:'/taskboard',
    element:<TaskBoard></TaskBoard>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
