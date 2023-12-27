import { useField } from "formik";
import styles from "./style.module.css";
import FormControl from "../FormControl";
import Label from "../Label";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";

const TextArea = ({ className, rows = 5, charLimit = 4, ...props }) => {
  const [count, setCount] = useState(0);
  const [focus, setFocus] = useState(false);
  const [field, meta, helpers] = useField(props);
  const classes = [];

  console.log(meta, helpers, field);

  classes.push(styles.textfield);
  classes.push(styles.textarea);
  if (className) {
    classes.push(className);
  }

  useEffect(() => {
    helpers.setError("errortje");
    helpers.setValue(count);
    helpers.setTouched();
  }, []);
  const handleChange = (e) => {
    let val = e.target.value;
    if (charLimit && val.length > charLimit) {
      helpers.setError(
        `there is a limit of ${charLimit} characters for this field.`
      );
    } else {
      setCount(val.length);
      field.onChange(e);
    }
  };
  const handleBlur = (e) => {
    setFocus(false);
    field.onBlur(e);
  };

  return (
    <div>
      <FormControl>
        <Label name={field.name} label={props.label}>
          <textarea
            rows={rows}
            {...props}
            className={classes.join(" ")}
            value={field.value}
            onBlur={handleBlur}
            onFocus={() => setFocus(true)}
            onChange={handleChange}
          />

          {charLimit && (
            <div className={styles.char__count}>
              {count}/{charLimit}{" "}
            </div>
          )}
        </Label>
        <ErrorMessage name={field.name} />
      </FormControl>
    </div>
  );
};

export default TextArea;
