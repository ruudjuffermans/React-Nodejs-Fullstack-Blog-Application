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

const ButtonPrimary = ({ children, loading = false, ...props }) => {
  const className = css("btn", props, styles);
  return (
    <button className={className} {...props}>
      {loading ? (
        <div>loading</div>
      ) : (
        <span className={styles.btn__inner}>{children}</span>
      )}
    </button>
  );
};

export default ButtonPrimary;
