import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  // const { title, director, metascore, id } = props.movie;
  const { url } = useRouteMatch();

  return (
  
    <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`}>
        <MovieCard movie={props.movie} />
      </Link>

        {/* <Link to={`${url}/${id}`}>
          <MovieCard movie={movie} />
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong> */}
        {/* </div>
        </Link> */} 
    </div>
  );
}
