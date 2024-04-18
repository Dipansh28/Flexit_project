//import React, { useEffect } from "react";
import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";

const useMovieById = async (movieId) => {
  const dispatch = useDispatch();

    console.log(movieId, "vggy")
    const fetchMovieById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
         const trailer = res?.data?.results?.filter( (item) => item.type === "Trailer");
        console.log(res.data.results)
        dispatch(
          getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
        );
        return true;
      } catch (error) {
        console.log(error);
      }
    };

  console.log("Outside useEffect:", movieId);
  await fetchMovieById();
  return true;
};

export default useMovieById;
