import {configureStore} from "@reduxjs/toolkit";
import giphyReducer from "./features/GiphySlice";

const store = configureStore({
    reducer: {
        giphy: giphyReducer
        // Define your reducers here
        // example: counter: counterReducer
    }
})

export default store;