import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies: null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        toggle:false,
        trailerMovie:null,
    },
    reducers:{
         //actions 
         getNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies = action.payload;
         },
         getPopularMovie:(state,action) => {
            console.log(action, `popular`)
            state.popularMovies = action.payload;
         },
         getTopRatedMovie:(state,action) => {
            state.topRatedMovies = action.payload;
         },
         getUpcomingMovies:(state,action) => {
            state.upcomingMovies = action.payload;
         },
         setToggle:(state)=>{
            state.toggle = !state.toggle;
         },
         getTrailerMovie:(state,action)=> {
            console.log(action.payload, "trailer")
            state.trailerMovie = action.payload;
         }
    }
});
export const {getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpcomingMovies, setToggle, getTrailerMovie} = movieSlice.actions;
export default movieSlice.reducer