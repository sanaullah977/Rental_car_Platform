import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Roots/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Layout/Home';
import Auth from '../Layout/auth';
import Login from '../Layout/Login';
import Register from '../Layout/Register';
import EquipmentDetails from '../Layout/equipmentDetails';
import EquipmentLayout from '../Layout/EquipLayout/EquipmentLayout';
import MyProfile from '../Layout/MyProfile/MyProfile';
import PetCartLayout from '../Layout/PetCartLayOut/PetCartLayout';


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
         loader : () => fetch ('/Pets.json')

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
    path:'/equipmentdetails/:serviceId',
    Component:EquipmentLayout,
    loader : () => fetch ('/Pets.json'),

    children:[

    ]
  },
  {
    path:'/myprofile',
    Component:MyProfile,
  },
  {
    path:'/cart',
    Component:PetCartLayout
  }
    
]);