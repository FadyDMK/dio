import styles from "./Showcase.module.css";
// import Poster from "../../assets/movieposter.webp";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

Showcase.propTypes = {
  title: propTypes.string,
  type: propTypes.string,
};

export default function Showcase({ title = "Recommended", type = "popular" }) {
  // const movie = {
  //   poster: Poster,
  //   title: "Blade Runner 2049",
  //   director: "Denis Villeneuve",
  //   year: "2017",
  //   genre: "action",
  //   price: 9.99,
  // };

  const [movies, setMovies] = useState(null);
  let URL = "";
  if (type === "popular") {
    URL =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=ae70c342303f7cab77e2bb86d2ba6ad0";
  } else if (type === "top_rated") {
    URL =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=ae70c342303f7cab77e2bb86d2ba6ad0";
  } else if (type === "discover") {
    URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=5&api_key=ae70c342303f7cab77e2bb86d2ba6ad0`;
  }
  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetch(URL);
      const movieJson = await movieData.json();
      console.log(movieJson.results);
      setMovies(movieJson.results);
    };
    getMovies();
  });

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
  };
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div className={styles.recommended}>
      <div className={styles.header}>
        <h2 style={{ color: "white" }}>{title}</h2>
        <div className={styles.controls} style={{ color: "white" }}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.icon}
            onClick={previous}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.icon}
            onClick={next}
          >
            Next
          </FontAwesomeIcon>
        </div>
      </div>
      <div className={styles.collection}>
        <div className={styles.sliderWrapper}>
          {movies !== null && (
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
              className={styles.slider}
            >
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}
