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
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        element: (
          <ErrorBoundary
            onError={(error) => {
              console.error('Error caught by ErrorBoundary:', error);
            }}
            FallbackComponent={ErrorPage} 
          >
            <AboutMe />
          </ErrorBoundary>
        ),
      },
      {
        path:'project',
        element:<Project />
      },
      {
        path:'contact',
        element:<Contact />,
      },
      {
        path:'resume',
        element:<Resume />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
