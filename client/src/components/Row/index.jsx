import styles from "./style.module.css";

const Row = ({ children, className, ...props }) => {
  const classes = [];

  classes.push(styles.row);

  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(" ")} {...props}>
      {children}
    </div>
  );
};

export const Col = ({ children, className, ...props }) => {
  const classes = [];

  classes.push(styles.col);

  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(" ")} {...props}>
      {children}
    </div>
  );
};

export default Row;
