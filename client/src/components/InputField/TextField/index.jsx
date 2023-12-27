import { useField } from "formik";
import styles from "./style.module.css";

const TextField = ({ className, ...props }) => {
  const [field, meta] = useField(props);
  const classes = [];

  classes.push(styles.textfield);
  if (className) {
    classes.push(className);
  }
  if (meta.error) {
    classes.push(styles.textfield__error);
  }

  const handleChange = (e) => {
    field.onChange(e);
  };
  const handleBlur = (e) => {
    field.onBlur(e);
  };

  return (
    <input
      className={classes.join(" ")}
      value={field.value}
      {...props}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

export default TextField;
