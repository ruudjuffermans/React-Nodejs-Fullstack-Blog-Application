import styles from "./styles.module.css";

const Page = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

export default Page;
