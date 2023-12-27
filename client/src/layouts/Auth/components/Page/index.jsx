import styles from "./styles.module.css";

const Page = ({ children }) => {
  return (
    <div className={styles.page}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Page;
