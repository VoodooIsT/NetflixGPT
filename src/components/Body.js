import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browser from './Browser'
import { useDispatch } from 'react-redux'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/slices/userSlice'

const Body = () => {

   const dispatch = useDispatch(state => state.user);


   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser())
        }
      });
   }, [])


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