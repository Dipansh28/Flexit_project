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
        open:false,
        id:"",
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
         },
         setOpen:(state,action)=>{
            state.open = action.payload;
         },
         getId:(state, action)=>{
            state.id = action.payload;
         }
    }
});
export const {getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpcomingMovies, setToggle, getTrailerMovie, setOpen, getId} = movieSlice.actions;
export default movieSlice.reducer