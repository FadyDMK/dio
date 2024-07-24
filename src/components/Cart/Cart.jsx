import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { Img } from "react-image";
import { getMoviePoster } from "../../services/api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { InfinitySpin } from "react-loader-spinner";


export default function Cart() {
  const [movies, setMovies] = useState([]);
  const context = useOutletContext();

 

  //error message if image fails to load
  const imgError = () => <Img src="https://via.placeholder.com/1920x1080" />;

  function handleDel(movie){
    context.setCart(context.cart.filter((item)=>item!==movie.id));
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const moviePromises = context.cart.map((id) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        ).then((response) => response.json())
      );
      const movieData = await Promise.all(moviePromises);
      setMovies(movieData);
    };
    fetchMovies();
  }, [context.cart]);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cart}>
        {movies.map((movie) => (
          <div className={styles.item} key={movie.id}>
            <div className={styles.img}>
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
            </div>
            <div className={styles.details}>
              <h2 className={styles.name}>{movie.original_title}</h2>
              <p className={styles.price}>$9.99</p>
            </div>
            <FontAwesomeIcon icon={faXmark} className={styles.delete} onClick={()=>handleDel(movie)}/>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h2>Total: ${context.cart.length * 10}</h2>
        <button className={styles.btn}>Checkout</button>
      </div>
    </div>
  );
}
