import React from 'react'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browser from './Browser'

const Body = () => {

    const appStore = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"browser",
            element:<Browser />
        },
    ])

  return (
    <div>
        <RouterProvider router={appStore}/>
    </div>
  )
}

export default Body