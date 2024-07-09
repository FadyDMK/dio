import styles from "./MovieCard.module.css";
import { Img } from "react-image";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

MovieCard.propTypes = {
  movie: propTypes.shape({
    poster: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    director: propTypes.string.isRequired,
    year: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    price:propTypes.number.isRequired,
  }).isRequired,
};

export default function MovieCard({ movie }) {
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
    <div className={styles.card}>
      <div className={styles.cartWrapper}>
        <FontAwesomeIcon icon={faShoppingCart} className={styles.cart}/>
        
      </div>
      <Img
        src={movie.poster}
        loader={imgLoader}
        unloader={imgError}
        className={styles.img}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.year}>Year: {movie.year}</p>
        <p className={styles.price}>Price: {movie.price}</p>
      </div>
    </div>
  );
}
