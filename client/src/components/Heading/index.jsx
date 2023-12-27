import styles from "./style.module.css";

const Heading = ({ tag, children }) => {
  let Tag = tag;
  return <Tag className={styles.heading}>{children}</Tag>;
};

export default Heading;
