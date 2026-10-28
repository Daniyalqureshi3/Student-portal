import './App.css'
import Layout from './layout/Layout'
import Assignment from './pages/Assignment'
import Attendence from './pages/Attendence'
import Payment from './pages/payment'
import Progress from './pages/Progress'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
    },
            {
        path:"Dasboard",
        element:<Dashboard/>
        },
    {
      path:"Assignment",
      element:<Assignment/>
    },
    {
      path:"Attendence",
      element:<Attendence/>
    },
    {
      path:"Progress",
      element:<Progress/>
    },
    {
      path:"Payment",
      element:<Payment/>
    },
  ])


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
