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
        path:"/details/:productId",
        element:<Details></Details>,
        loader:()=>fetch('/product.json'),
      }
      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
