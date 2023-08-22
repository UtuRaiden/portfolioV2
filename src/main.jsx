import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import './styles.css';

import App from './App.jsx'
import AboutMe from './pages/aboutMe'
import ErrorPage from './pages/errorPage'
import Project from './pages/projects'
import Contact from './pages/contact'
import Resume from './pages/resume'


const router = createBrowserRouter([
  {
    path:'/portfolioV2',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<AboutMe />,
      },
      {
        path:'portfolioV2/project',
        element:<Project />
      },
      {
        path:'portfolioV2/contact',
        element:<Contact />,
      },
      {
        path:'portfolioV2/resume',
        element:<Resume />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
