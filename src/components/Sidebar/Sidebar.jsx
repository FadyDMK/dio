import { Img } from "react-image";
import styles from "./Sidebar.module.css";
import logo from "../../assets/png/logo-no-background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faHouse,
  faShop,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  //placeHolder for the image while loading
  const logoLoader = () => <div>Loading...</div>;

  //error message if image fails to load
  const logoError = () => <div>Error loading image</div>;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Img
            src={logo}
            loader={logoLoader}
            unloader={logoError}
            className={styles.logo}
          />
        </div>
        <div className={styles.menu}>
          <Link to="/" className={styles.menuItem}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </Link>

          <Link to="shop" className={styles.menuItem}>
            <FontAwesomeIcon icon={faShop} />
            Shop
          </Link>

          <Link to="*" className={styles.menuItem}>
            <FontAwesomeIcon icon={faBasketShopping} />
            Cart
          </Link>
        </div>
        <div className={styles.info}>
          <div>
            <FontAwesomeIcon icon={faCopyright} />{" "}
            <span style={{ paddingLeft: 5 }}>
              {new Date().getFullYear()} Fady Damak
            </span>
            <a
              href="https://github.com/FadyDMK"
              target="_blank"
              style={{ paddingLeft: 5 }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
