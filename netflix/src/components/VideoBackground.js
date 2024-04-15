import React, { useState, useEffect } from "react";

import useMovieById from "../hooks/useMovieById";

import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const [isMovieLoaded, setMovieLoaded] = useState(false);
  useMovieById(movieId);

  useEffect(() => {
    setMovieLoaded(true);
  }, []);

  const trailerMovie = useSelector((state) => state.movie.trailerMovie);
  useEffect (()=> {
    console.log(trailerMovie, "this is movie" )
  },[trailerMovie]
)
  if (!isMovieLoaded) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerMovie.key}fCVm5U2ob8U?si=yEdTpLYT1eUE6ald&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
