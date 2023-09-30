import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePoplularMovies from '../hooks/usePoplularMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browser = () => {

  const showGptSearch = useSelector((store) => store.GPT.showGptSearch)

  useNowPlayingMovies();
  usePoplularMovies();
  useUpcommingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
          <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )

      }
    </div>
  )
}

export default Browser