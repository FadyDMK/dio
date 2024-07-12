import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar/>
        <Home/>
      </div>
    </>
  );
}

export default App;
