import styles from "./style.module.css";

const Text = ({ tag = "p", children }) => {
  let Tag = tag;
  return <Tag className={styles.text}>{children}</Tag>;
};

export default Text;
