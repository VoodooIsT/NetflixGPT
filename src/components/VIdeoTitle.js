import React from 'react'
import { BsPlayFill } from "react-icons/bs"
import { FiInfo } from "react-icons/fi"

const VIdeoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold mb-6'>{title}</h1>
        <p className='text-[12px] text-white w-5/12 '>{overview}</p>

        <div className='flex gap-x-5 mt-5'>
            <button className='px-10 py-3 bg-white flex gap-x-2 items-center text-black rounded-md hover:bg-opacity-80'>
                <BsPlayFill className='text-2xl text-black'/>
                Play
                </button>
                <button className='px-6 py-3 bg-[#6D6D6EB3] flex gap-x-2 items-center text-white rounded-md'>
                    <FiInfo className='text-xl'/>
                    More Info
                </button>
        </div>
    </div>
  )
}

export default VIdeoTitle