import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./components/Home/Home.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
