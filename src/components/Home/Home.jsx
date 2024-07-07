import Slider from "react-slick";
import styles from "./Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img } from "react-image";

export default function Home() {
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
    <div className={styles.home}>
      <div className={styles.slider}>
        <Slider {...settings}>
          <div className={styles.item}>
            <Img
              src="https://cdn.mos.cms.futurecdn.net/wtdyfMTWagJibbdA8Fm4GL-1024-80.jpg.webp"
              loader={imgLoader}
              unloader={imgError}
              className={styles.img}
            />
          </div>
          <div className={styles.item}>
            <Img
              src="https://via.placeholder.com/1920x1080"
              loader={imgLoader}
              unloader={imgError}
              className={styles.img}
            />
          </div>
          <div className={styles.item}>
            <Img
              src="https://via.placeholder.com/1920x1080"
              loader={imgLoader}
              unloader={imgError}
              className={styles.img}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
