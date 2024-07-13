import Slider from "react-slick";
import styles from "./HomeSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img } from "react-image";
import { useState, useEffect } from "react";
import { getMoviePoster } from "../../services/api/api";

export default function HomeSlider() {
  const URL =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=ae70c342303f7cab77e2bb86d2ba6ad0";
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetch(URL);
      const movieJson = await movieData.json();
      setMovies(movieJson.results);
    };
    getMovies();
  },[]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    lazyLoad: true,
    fade: true,
  };

  //placeHolder for the image while loading
  const imgLoader = () => (
    <div className={styles.ldsRoller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  //error message if image fails to load
  const imgError = () => <Img src="https://via.placeholder.com/1920x1080" />;

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {movies !== null && (movies.map((movie) => (
          <div className={styles.item} key={movie.id}>
            <Img
              src={getMoviePoster(movie.backdrop_path)}
              loader={imgLoader}
              unloader={imgError}
              className={styles.img}
            />
          </div>
        )))}
      </Slider>
    </div>
  );
}
