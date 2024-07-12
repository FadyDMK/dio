import styles from "./Home.module.css";
import Showcase from "../Showcase/Showcase.jsx";
import HomeSlider from "../HomeSlider/HomeSlider.jsx"

export default function Home() {
  
  return (
    <div className={styles.home}>
      <HomeSlider/>
      
      <Showcase title={"Popular"} />
      <Showcase title={"Top Rated"} type="top_rated"/> 
      <Showcase title={"Discover"} type="discover" /> 
    </div>
  );
}
