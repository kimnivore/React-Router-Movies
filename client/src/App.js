import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          // console.log(response);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    const savedList = saved.find(movie => {
      return movie.id === id
    })
    if (savedList) return;

    const found = movieList.find(movie => movie.id === id);
    setSaved([...saved, found])
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
        <SavedList list={saved} />

        <Route exact path="/">
          <MovieList style={{textDecoration: 'none'}} movies={movieList} />
        </Route>
        
        <Route path="/movies/:id" >
          <Movie saveMovie={addToSavedList} />
        </Route>
    </div>
  );
}
