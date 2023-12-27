import { Field } from "formik";
import styles from "./style.module.css";

const Toggle = ({ className, round, name }) => {
  const classes = [];
  classes.push(styles.toggle);
  if (className) {
    classes.push(className);
  }

  if (round) {
    classes.push(styles.slider__round);
  }
  return (
    <Field
      type="checkbox"
      name={name}
      render={({ field, form }) => (
        <label className={styles.switch}>
          <input {...field} className={classes.join(" ")} type={"checkbox"} />
          <span
            className={
              round ? `${styles.slider} ${styles.slider__round}` : styles.slider
            }
          ></span>
        </label>
      )}
    />
  );
};

export default Toggle;
