import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Roots/Root';
import Home from './Components/Landingpage/Home';
import SavingsDetails from './Components/RoutingPage/SavingsDetails';
import Details from './Components/RoutingPage/Details';
import AllProducts from './Components/Landingpage/AllProducts';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Blog from './Components/Pages/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path:"/",
      element:<Home></Home>,
      },
      {
        path:"/allProducts",
        element:<AllProducts></AllProducts>
      },
      {
        path:"/details/:productId",
        element:<Details></Details>,
        loader:()=>fetch('/products.json'),
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
