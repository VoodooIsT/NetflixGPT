import React from 'react'
import MovieCard from './MovieCard'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const MovieList = ({title, movies}) => {
  return (
    <div className='px-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>
               {title}
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 7,
            },
          }}
          className="max-h-[30rem]"
        >
          {movies?.map((card, i) => (
            <SwiperSlide key={i}>
              <MovieCard photo={card.poster_path} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper> 

    </div>
  )
}

export default MovieList