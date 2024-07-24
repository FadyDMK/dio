import styles from "./MovieCard.module.css";
import { Img } from "react-image";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getMoviePoster } from "../../services/api/api";
import { useOutletContext } from "react-router-dom";
import {InfinitySpin} from "react-loader-spinner";

MovieCard.propTypes = {
  movie: propTypes.shape({
    poster_path: propTypes.string.isRequired,
    original_title: propTypes.string.isRequired,
    release_date: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  }).isRequired,
};

export default function MovieCard({ movie }) {
  const context = useOutletContext();

  //placeHolder for the image while loading
  const [added, setAdded] = useState(context.cart.includes(movie.id));

  //placeholder to lazy load images

  //error message if image fails to load
  const imgError = () => <Img src="https://via.placeholder.com/1920x1080" />;

  function handleClick() {
    if (!added) {
      context.setCart((prevCart) => [...prevCart, movie.id]);
    } else {
      context.setCart(context.cart.filter((item) => item !== movie.id));
    }
    setAdded(!added);
  }

  return (
    <div className={styles.card}>
      <div
        className={added ? styles.cartClicked : styles.cartWrapper}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faShoppingCart} className={styles.cart} />
      </div>
      <Img
        src={getMoviePoster(movie.poster_path)}
        loader={<InfinitySpin
          visible={true}
          width="200"
          color="#00CCC9"
          ariaLabel="infinity-spin-loading"
          />}
        unloader={imgError}
        className={styles.img}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.original_title}</h3>
        <p className={styles.year}>Year: {movie.release_date}</p>
        <p className={styles.price}>Price: {"9.99"}</p>
      </div>
    </div>
  );
}
