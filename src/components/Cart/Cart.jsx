import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";

export default function Cart() {

  const context = useOutletContext();

  return <div className={styles.wrapper}>
    <h1 className={styles.title}>Cart</h1>
    <div className={styles.cart}>
        
      <div className={styles.item}>
        <div className={styles.img}></div>
        <div className={styles.details}>
          <h2 className={styles.name}>Movie Name</h2>
          <p className={styles.price}>$10.00</p>
          <p className={styles.quantity}>Quantity: 1</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.img}></div>
        <div className={styles.details}>
          <h2 className={styles.name}>Movie Name</h2>
          <p className={styles.price}>$10.00</p>
          <p className={styles.quantity}>Quantity: 1</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.img}></div>
        <div className={styles.details}>
          <h2 className={styles.name}>Movie Name</h2>
          <p className={styles.price}>$10.00</p>
          <p className={styles.quantity}>Quantity: 1</p>
        </div>
      </div>
    </div>
    <div className={styles.total}>
      <h2>Total: $30.00</h2>
      <button className={styles.btn}>Checkout</button>
    </div>
  </div>;
}
