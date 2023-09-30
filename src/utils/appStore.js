import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import gptReducer from './slices/gptSlice';
import configReducer from "./slices/configSlice"

const appStore = configureStore({
    reducer: {
        GPT: gptReducer,
        user: useReducer,
        movies:movieReducer,
        config: configReducer
    
    }
})

export default appStore