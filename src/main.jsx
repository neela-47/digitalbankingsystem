import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Roots/Root';
import Home from './Components/Landingpage/Home';
//import Banner from './Components/Landingpage/Banner';
//import Features from './Components/Landingpage/Features';
//import AllProducts from './Components/Landingpage/AllProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path:"/",
      element:<Home></Home>,
      },
      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
