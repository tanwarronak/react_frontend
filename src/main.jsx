import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cars from '../pages/cars.jsx'
import Phones from '../pages/phones.jsx'
import Sporst from '../pages/sports.jsx'
import Laptops from '../pages/laptops.jsx'
import Addata from '../pages/addata.jsx'
import Showdata from '../pages/Showdata.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
},
  {
    path:"/cars",
    element:<Cars/>
  },
  {
    path:"/phones",
    element:<Phones/>
  },
  {
    path:"/laptops",
    element:<Laptops/>
  },
  {
    path:"/sports",
    element:<Sporst/>
  },
  {
    path:'/sell_on_here',
    element:<Addata/>
  },
  {
    path:'/showdata',
    element:<Showdata/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
