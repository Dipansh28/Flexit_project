import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import useMovieById from '../hooks/useMovieById';


const MainContainer = () => {
  const movie = useSelector(store => store.movie?.nowPlayingMovies);
    if(!movie) return; //early return in react
    
    const {overview, id, title} = movie[4];
    console.log(id, "ggyu")
   // useMovieById(id); 

  return (
    <div>
      <VideoTitle title={title} overview= {overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
