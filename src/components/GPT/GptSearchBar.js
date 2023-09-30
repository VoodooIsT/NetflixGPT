import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from "../../utils/languageConstant"
const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.langKey)

  return (
    <div className='pt-[10%] flex justify-center' >
        <form action="" className='rounded-md px-4 py-4 w-1/2 bg-[#000000BC] grid grid-cols-12'>
            <input type="text" className='p-4 m-4 rounded-md col-span-9' placeholder={lang[langKey].gptPlaceholder} />
            <button className='m-4 px-4 py-2 col-span-3 bg-red-700 text-white rounded-md '>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar