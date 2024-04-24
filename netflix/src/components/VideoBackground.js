import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";

const VideoBackground = ({ movieId, bool }) => {
  const [isMovieLoaded, setMovieLoaded] = useState(false);
  const [trailerData, setTrailerData] = useState([]);
  const dispatch = useDispatch();

  const fetchMovieById = async () => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,
        options
      );

      const trailer = res?.data?.results?.filter(
        (item) => item.type === "Trailer"
      );
      if (trailer?.length > 0) {
        setTrailerData(trailer[0]);
      } else {
        setTrailerData(res.data.results[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (movieId) {
      fetchMovieById();
    }
    setMovieLoaded(true);
  }, []);

  if (!isMovieLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen">
      <iframe
        className={`${bool ? "[w-100%]" : "w-screen aspect-video" } `}
        src={`https://www.youtube.com/embed/fCVm5U2ob8U?si=${trailerData?.key}&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
