import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Roots/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Layout/Home';
import Auth from '../Layout/auth';
import Login from '../Layout/Login';
import Register from '../Layout/Register';

import MyProfile from '../Layout/MyProfile/MyProfile';


import AddCarsLayout from '../Layout/AllCars/AllCarsLayout'
import UpdateCarDB from '../Layout/AllCars/UpdateCarDB';
import CartLayout from '../Layout/PetCartLayOut/CartLayout';
import CarDetails from '../Layout/CarDetails';
import CarDetailsLayout from '../Layout/PetCartLayOut/CarDetails/CarDetailsLayout';
import Cart from '../Layout/PetCartLayOut/Cart';
import AppDetails from '../Layout/Allcars';
import AllCar from '../Layout/Allcars';



export 
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,

    children:[
      {
        index:true,
        path:'/',
        Component:Home,
         loader : () => fetch ('http://localhost:3000/rentcar')

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
  },

  {
    path:'/cardetails/:_id',
    Component:CarDetailsLayout,
    loader : ({params}) => fetch (`http://localhost:3000/rentcar/${params._id}`),

    
  },
  {
    path:'/myprofile',
    Component:MyProfile,
  },
  
  {
    path:'/cart',
    Component:CartLayout,
    loader: ({params}) => fetch (`http://localhost:3000/rentcar/${params._id}`)
  },
  {
    path:'/addcar',
    element:<AddCarsLayout/>,
    loader : () => fetch('http://localhost:3000/rentcar')
  },
  {
    path:'/updatadb/:_id',
    element: <UpdateCarDB/>,
    loader : ({params}) => fetch(`http://localhost:3000/rentcar/${params._id}`)
  },

  {
    path:'/allcars',
    Component:AllCar,
    loader:() => fetch(`http://localhost:3000/rentcar/`)
  },

    
]);


// XcytQe1buuVSqiei