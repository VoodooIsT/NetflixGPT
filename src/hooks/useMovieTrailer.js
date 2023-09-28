import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/slices/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

    const getMovieVideo = async () => {

        const data =  await  fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json()
        console.log(json)

        const filteredData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filteredData.length ? filteredData[1] : json.results[0];
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))

    }
useEffect(() => {
    getMovieVideo();
})
}

export default useMovieTrailer