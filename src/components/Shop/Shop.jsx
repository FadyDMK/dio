import styles from "./Shop.module.css";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";


export default function Shop() {
  const [movies, setMovies] = useState(null);
  const [page,setPage]=useState(2);

 

  const URL =
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`;


  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetch(URL);
      const movieJson = await movieData.json();
      setMovies(movieJson.results);
    };
    getMovies();
  }, []); 




  const handleMore = async () => {
    let nextPageURL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${import.meta.env.VITE_API_KEY}`;
    const movieData = await fetch(nextPageURL);
    const movieJson = await movieData.json();
    setMovies((prevMovies) => [...prevMovies, ...movieJson.results]);
    setPage(page+1);
  };

  // Rest of the code...

  return (
    <div className={styles.container}>
      {movies !== null && (
        <div className={styles.cardCollection}>
          {movies.map((movie) => (
            <div className={styles.card} key={movie.id}>
              <MovieCard movie={movie} key={movie.id} />
            </div>
          ))}
          
        </div>
        
      )}
      <div className={styles.btn} onClick={handleMore}>
            Show More
      </div>
    </div>
  );
}
