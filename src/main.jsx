import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header/Header';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element: <Category></Category>
      },
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:`/viewDetails/:id`,
        element: <JobDetails></JobDetails>,
        loader:({params})=>fetch(`/feature.json`),
      },
      
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
