import styles from "./styles.module.css";

function css(baseClassName, props, styleModules) {
  let classes = [styleModules[baseClassName] || ""];

  Object.keys(props).forEach((prop) => {
    if (props[prop] && styleModules[prop]) {
      classes.push(styleModules[prop]);
    }
  });

  return classes.join(" ");
}

const Button = ({ children, ...props }) => {
  const className = css("btn", props, styles);
  return (
    <button className={className} {...props}>
      <span className={styles.btn__inner}>
        <span className={styles.btn__text}>{children}</span>
        <span className={styles.btn__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z"
            ></path>
          </svg>
        </span>
      </span>
    </button>
  );
};

export default Button;
