import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcommingMovies: null,
        topRatedMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcommingMovies : (state, action) => {
            state.upcommingMovies = action.payload
        },
        addTopratedMovies : (state, action) => {
            state.topRatedMovies = action.payload
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        }
    }
});

export const { addNowPlayingMovies, addPopularMovies, addUpcommingMovies, addTopratedMovies, addTrailerVideo } = movieSlice.actions

export default movieSlice.reducer;

