import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./components/Home/Home.jsx";
import styles from "./App.module.css";
import MovieCard from "./components/MovieCard/MovieCard.jsx";
import Poster from "./assets/movieposter.webp"

function App() {
  const movie={
    poster: Poster,
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    year:"2017",
    genre:"action",
    price: 9.99,
  }
  return (
    <>
      <div className={styles.wrapper}>
        <MovieCard movie={movie}/>
      </div>
    </>
  );
}

export default App;
