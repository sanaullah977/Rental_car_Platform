import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Roots/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Layout/Home';
import Auth from '../Layout/auth';
import Login from '../Layout/Login';
import Register from '../Layout/Register';


export 
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:ErrorPage,

    children:[
      {
        index:true,
        path:'/',
        Component:Home,

      },
      
    ]
  },

  {
        path:'/auth',
        Component:Auth,

        children:[
          {
            path:'/auth/login',
            Component:Login,
          },

          {
            path:'/auth/register',
            Component:Register,
          }
        ]
      }
]);