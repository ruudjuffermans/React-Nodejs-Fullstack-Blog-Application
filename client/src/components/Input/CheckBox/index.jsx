import { Field } from "formik";
import styles from "./style.module.css";

const CheckBox = ({ className, round, name }) => {
  const classes = [];
  classes.push(styles.checkbox);
  if (className) {
    classes.push(className);
  }

  return (
    <Field
      type="checkbox"
      name={name}
      render={({ field, form }) => (
        <label className={styles.wrapper}>
          <input {...field} className={classes.join(" ")} type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
      )}
    />
  );
};

export default CheckBox;
