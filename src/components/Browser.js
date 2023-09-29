import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePoplularMovies from '../hooks/usePoplularMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browser = () => {

  useNowPlayingMovies();
  usePoplularMovies();
  useUpcommingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browser