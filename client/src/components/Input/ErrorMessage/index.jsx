import { ErrorMessage as FormikErrorMessage } from "formik";
import styles from "./style.module.css";

const ErrorMessage = ({ className, name, ...props }) => {
  const classes = [];

  classes.push(styles.error__text);
  if (className) {
    classes.push(className);
  }
  return (
    <FormikErrorMessage
      name={name}
      render={(error) =>
        Array.isArray(error) ? (
          <div className={styles.error__wrapper}>
            {error.map((error, i) => (
              <div key={i} className={styles.error__item}>
                {error}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.error__wrapper}>
            <div className={styles.error__text}>{error}</div>
          </div>
        )
      }
    />
  );
};

export default ErrorMessage;
