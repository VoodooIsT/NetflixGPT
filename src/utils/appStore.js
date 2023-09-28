import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies:movieReducer
    
    }
})

export default appStore