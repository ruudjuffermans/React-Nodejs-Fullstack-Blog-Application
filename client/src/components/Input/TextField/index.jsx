import { useField } from "formik";
import styles from "./style.module.css";
import FormControl from "../FormControl";
import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

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
    <div>
      <FormControl>
        <Label name={field.name} label={props.label} />
        <input
          className={classes.join(" ")}
          value={field.value}
          {...props}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <ErrorMessage name={field.name} />
      </FormControl>
    </div>
  );
};

export default TextField;
