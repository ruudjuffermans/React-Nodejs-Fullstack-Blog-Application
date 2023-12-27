import styles from "./style.module.css";

const Button = ({
  children,
  className,
  large,
  small,
  round,
  full,
  primary,
  nocard,
  secondary,
  ...props
}) => {
  const classes = [];

  classes.push(styles.btn);
  if (large) {
    classes.push(styles["btn--large"]);
  }

  if (small) {
    classes.push(styles["btn--small"]);
  }

  if (round) {
    classes.push(styles["btn--round"]);
  }

  if (full) {
    classes.push(styles["btn--full"]);
  }

  if (secondary) {
    classes.push(styles["btn--secondary"]);
  }

  if (nocard) {
    classes.push(styles["btn--nocard"]);
  }

  if (primary) {
    classes.push(styles["btn--primary"]);
  }

  if (className) {
    classes.push(className);
  }

  return (
    <button className={classes.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
