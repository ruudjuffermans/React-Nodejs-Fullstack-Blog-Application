import styles from "./styles.module.css";

const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
