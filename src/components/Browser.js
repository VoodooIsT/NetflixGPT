import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';

const Browser = () => {

  useNowPlayingMovies();

  return (
    <div className='flex justify-between'>
      <Header />
      <MainContainer />
      
    </div>
  )
}

export default Browser