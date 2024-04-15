import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  return (
    <div className='px-8'>
        <h1 className='text-3xl py-3 text-white'>{title}</h1>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
            <div className='flex item-center'>
              {
                movies.map((movie)=>{
                  return (
                    <MovieCard key={movie.id}posterPath={movie.poster_path}/>
                  )
                })
              }


            </div>
        </div>
    </div>
  )
}

export default MovieList
