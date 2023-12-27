import styles from "./style.module.css";

const Label = ({ className, name, label, children, ...props }) => {
  const classes = [];

  classes.push(styles.label);
  if (className) {
    classes.push(className);
  }
  return (
    <label htmlFor={name} className={classes.join(" ")} {...props}>
      {label}
      {children}
    </label>
  );
};

export default Label;
