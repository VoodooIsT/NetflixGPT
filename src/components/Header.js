import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import useOnClickOutside from "../hooks/useOnClickOutside"
import { AiOutlineCaretDown } from "react-icons/ai"
import {VscSignOut} from 'react-icons/vsc'
// import ProfileDropdown from './common/ProfileDropDown';

const Header = () => {

  const user  = useSelector((store) => store.user)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate('/')
    })
    .catch(() => {
      navigate("/error")
    })
  }


  return ( 
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center'>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className=' w-40 '/>
        {
          user!== null && (
            <div>
                <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
      <img src="https://occ-0-4344-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt=""  className=''/>
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
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