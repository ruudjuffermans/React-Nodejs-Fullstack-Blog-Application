import styles from "./style.module.css";

const Container = ({ className, children, ...props }) => {
  const classes = [styles.container];

  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(" ")} {...props}>
      {children}
    </div>
  );
};

export const Content = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export const Side = ({ children }) => {
  return <div className={styles.side}>{children}</div>;
};

export default Container;
