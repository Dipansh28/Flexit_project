import axios from "axios";
import { getUpcomingMovies } from "../redux/movieSlice";
import { Upcoming_Movie, options } from "../utils/constant";
//import { useDispatch } from "@reduxjs/toolkit" 
import {useDispatch} from 'react-redux';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const fetchtoprated = async () => {
    try {
     const res = await axios.get( Upcoming_Movie, options);
     dispatch(getUpcomingMovies(res.data.results));
    } catch (error) {
       console.log(error);
    }
}
return fetchtoprated;
}
export default useUpcomingMovies;