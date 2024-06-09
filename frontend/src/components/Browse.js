import React, { useEffect, useState } from 'react'
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';



const Browse = () => {
   const user = useSelector(state => state.user.user);
   const navigate = useNavigate();
   const toggle = useSelector(store=>store.movie.toggle);
   const dispatch = useDispatch();
   const fetchtopratedmovies = useTopRatedMovies();
   const fetchnowplayingmovies = useNowPlayingMovies();
   const fetchpopularmovies = usePopularMovies();
   const fetchupcomingmovies = useUpcomingMovies();
   const [loading, setLoading] = useState(true);

//    //Hooks
   
   useEffect(()=>{
    if(!user){
        navigate("/");
       }
      const fetchData = async () => {
      await  fetchtopratedmovies();
      await fetchnowplayingmovies();
      await fetchpopularmovies();
      await fetchupcomingmovies();
       setLoading(false)
      }
         fetchData()

       },[]);

       return (
        <div>
            {loading?(<h1> loading...</h1>):(
                <div>
              <Header/>
              <div>
                  {  
                     toggle ? <SearchMovie/> : (  
                <> 
                  <MainContainer/>
                  <MovieContainer/>
                  </>
                     )
                    }
              </div>
              </div>
            )}
            
        </div>
    );
};

export default Browse