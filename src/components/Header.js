import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import useOnClickOutside from "../hooks/useOnClickOutside"
import { AiOutlineCaretDown } from "react-icons/ai"
import {VscSignOut} from 'react-icons/vsc'
import { addUser, removeUser } from '../utils/slices/userSlice';
import { toggleGptSearchView } from '../utils/slices/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/slices/configSlice';
// import ProfileDropdown from './common/ProfileDropDown';

const Header = () => {



  const user  = useSelector((store) => store.user)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const dispatch = useDispatch()

  useOnClickOutside(ref, () => setOpen(false))

  const handleSignout = () => {
    signOut(auth).then(() => {
    })
    .catch(() => {
      navigate("/error")
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          navigate('/browser')
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser())
          navigate('/')
        }
      });
   }, [])

   const handleSearchBtn = () => {
    dispatch(toggleGptSearchView())
   }

   const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
   }


  return ( 
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center'>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className=' w-40 '/>
        {
          user!== null && (
            <div className='-mx-[400px]'>
              <nav className='flex items-center'>
                <ul className='flex gap-x-5 text-white  cursor-pointer font-medium'>
                  <li className='hover:text-gray-400'>Home</li>
                  <li className='hover:text-gray-400'>TVshows</li>
                  <li className='hover:text-gray-400'>Movies</li>
                  <li className='hover:text-gray-400'>New & Popular</li>
                  <li className='hover:text-gray-400'>My List</li>
                  <li className='hover:text-gray-400'>Browse by Languages</li>
                </ul>
              </nav>
            </div>
          )
        },
        {
          user!== null && (
            <div className='flex gap-x-4 items-center'>

              <select name="" id="" className='px-6 py-2 rounded-md bg-[#000000BC] text-white' onChange={handleChange}>
                {
                  SUPPORTED_LANGUAGES.map((language) => (
                    <option value={language.identifier}>{
                      language.name
                    }</option>
                  ))
                }
              </select>
              
              <div>
                <button onClick={handleSearchBtn} className='bg-purple-800 p-2 px-6 rounded-md text-white'>Search GPT</button>
              </div>
                <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
      <img src="https://occ-0-4344-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt=""  className=''/>
        <AiOutlineCaretDown className="text-sm text-white" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          ref={ref}
        >
          <div
            onClick={() => {
              handleSignout();
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-xl" />
            Sign Out
          </div>
        </div>
      )}
       </button>
            </div>
          )
        }
    </div>
  )
}

export default Header