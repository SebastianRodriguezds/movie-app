import { useEffect } from "react";
import { useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import "../components/ContextMovieCard.css"

export function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);
      console.log(data.result);
    });

  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/> // Agrega un 'key' para evitar advertencias
      ))}
    </ul>
  );
  
}


