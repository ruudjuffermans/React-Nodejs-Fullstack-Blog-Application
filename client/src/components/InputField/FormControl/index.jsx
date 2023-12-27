import styles from "./style.module.css";

const FormControl = ({ className, ...props }) => {
  const classes = [];

  classes.push(styles.formcontrol);
  if (className) {
    classes.push(className);
  }
  return <div className={classes.join(" ")} {...props} />;
};

export default FormControl;
