import axios from "axios";
import { getTopRatedMovie } from "../redux/movieSlice";
import { Top_Rated_Movies, options } from "../utils/constant";
//import { useDispatch } from "@reduxjs/toolkit";
import {useDispatch} from 'react-redux';

const useTopRatedMovies = () => {
    const dispatch = useDispatch ();
    const fetchtoprated = async () => {
        try {
            const res = await axios.get(Top_Rated_Movies, options);
            console.log(res)
            dispatch(getTopRatedMovie(res.data.results));
           } catch (error) {
              console.log(error);
           }

    }
    return fetchtoprated;
    
}
export default useTopRatedMovies;