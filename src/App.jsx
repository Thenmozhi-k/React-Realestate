

import './App.css'

import Hero from './Components/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import Layout from './Components/Layout';
import SinglePage from './Pages/SinglePage';
import Login from './Pages/Login';


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Hero/>
        },
        {
          path:'list',
          element:<ListPage/>
        },
        {
          path:'/:id',
          element:<SinglePage/>
        },
        
      ]
    },
    
  ])
  return (
    <>
     

      <RouterProvider router={router}/>
    </>
  )

}
export default App
