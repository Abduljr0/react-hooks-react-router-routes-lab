import React from "react";
import { movies } from "../data";

function Movies() {
  const movielist =movies.map((movie)=>(
    <div key={movie.title}>
      <h1>{movie.title}</h1>
      <p>Runtime: {movie.time} min</p>
      <ul>
        {movie.genres.map((genre=>(
          <li key={genre}>{genre}</li>
        )))}
      </ul>
    </div>
  ))
  return (
    <>
    <h1>Movies Page</h1>
    {movielist}
    </>
  )
}

export default Movies;
