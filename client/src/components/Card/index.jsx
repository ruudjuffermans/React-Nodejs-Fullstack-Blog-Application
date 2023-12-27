import styles from "./style.module.css";

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>{children}</div>
    </div>
  );
};

export default Card;
