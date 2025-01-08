
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import Applayouts from './layouts/Applayouts'
import Favourite from './pages/favourite'
import Search from './pages/Search'
import GifPage from './pages/GifPage'
import ErrorPage from './pages/ErrorPage'


  //home page
  //category page
  //search page
  //single gif
  //favourite page

  const router = createBrowserRouter([
    {
      element:<Applayouts />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:"/",
          element:<HomePage />
        },
        {
          path:"/:category",  
          element:<CategoryPage />
        },
        {
          path:"/search/:query",
          element:<Search />
        },
        {
          path:"/:types/:slug",
          element:<GifPage />
        },
        {
          path:"/favourite",
          element:<Favourite />
        }

      ]
    }
  ])

  function App() {
  return ( <RouterProvider router={router} />)
}

export default App
