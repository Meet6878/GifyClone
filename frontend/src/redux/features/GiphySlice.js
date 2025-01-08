import { createSlice } from "@reduxjs/toolkit";

const giphySlice = createSlice({
    name:"giphy",
    initialState:{
        gifs:[]
    },
    reducers:{
        getAllGiphy:(state,action)=>{
            state.gifs = action.payload
        },
        clearAllGiphy:(state)=>{
            state.gifs = [];
        }
    }
})


export const {getAllGiphy,clearAllGiphy} = giphySlice.actions;

export default giphySlice.reducer;
