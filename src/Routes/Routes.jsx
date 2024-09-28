import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import Blogs from "../Pages/Blogs/Blogs"
import Blog from "../Pages/Blogs/Blog"
import Bookmarks from "../Pages/Bookmarks/Bookmarks"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
            },
            {
                path: '/blog/:id',
                element: <Blog />,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />
            }
        ]

    }
])


