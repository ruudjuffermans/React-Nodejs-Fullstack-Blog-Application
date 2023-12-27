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

export const NarrowContainer = ({ children }) => {
  return <div className={styles.narrowcontainer}>{children}</div>;
};

export default Container;
