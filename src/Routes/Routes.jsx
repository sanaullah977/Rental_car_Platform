import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Roots/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Layout/Home';
import Auth from '../Layout/auth';
import Login from '../Layout/Login';
import Register from '../Layout/Register';

import MyProfile from '../Layout/MyProfile/MyProfile';



import UpdateCarDB from '../Layout/AllCars/UpdateCarDB';
import CartLayout from '../Layout/PetCartLayOut/CartLayout';
import CarDetails from '../Layout/CarDetails';
import CarDetailsLayout from '../Layout/PetCartLayOut/CarDetails/CarDetailsLayout';
import Cart from '../Layout/PetCartLayOut/Cart';
import AppDetails from '../Layout/Allcars';
import AllCar from '../Layout/Allcars';
import PrivateRoute from './PrivateRoute';
import AllCars from '../Layout/Allcars';
import AllCarsLayout from '../Layout/AllCars/AllCarsLayout';
import AddCars from '../Layout/AllCars/AddCars';
import AddCarsLayout from '../Layout/AllCars/AddCarsLayout';



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
         loader : () => fetch ('https://y-one-ecru.vercel.app/rentcar')

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
   element:
    <CarDetailsLayout></CarDetailsLayout>
   ,
    loader : ({params}) => fetch (`https://y-one-ecru.vercel.app/rentcar/${params._id}`),

    
  },
  {
    path:'/myprofile',
    element:<PrivateRoute><MyProfile/></PrivateRoute>
  },
  
  {
    path:'/cart',
  element:<PrivateRoute><CartLayout/></PrivateRoute>,
  
    loader: () => fetch (`https://y-one-ecru.vercel.app/rentcar`),
  },
  {
    path:'/addcar',
    element:<PrivateRoute>
      <AddCarsLayout/>
      </PrivateRoute>,
    loader : () => fetch('https://y-one-ecru.vercel.app/rentcar')
  },
  {
    path:'/updatadb/:_id',
    element: <PrivateRoute>
      <UpdateCarDB/>
    </PrivateRoute>,
    loader : ({params}) => fetch(`https://y-one-ecru.vercel.app/rentcar/${params._id}`)
  },

  {
    path:'/allcars',
    element:<AllCarsLayout/>,
    loader:() => fetch(`https://y-one-ecru.vercel.app/rentcar`)
  },

    
]);


// XcytQe1buuVSqiei