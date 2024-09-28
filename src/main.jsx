
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Blogs from './Pages/Blogs/Blogs'
import Bookmarks from './Pages/Bookmarks/Bookmarks'

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/bookmarks',
        element:<Bookmarks/>
      }
    ]
    
  }
])
createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}>

    </RouterProvider>
  </>,
)
