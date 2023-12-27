import styles from "./style.module.css";

const Card = ({ className, full, children, ...props }) => {
  const classes = [];
  classes.push(styles.card);
  if (className) {
    classes.push(className);
  }

  if (full) {
    classes.push(styles.card__full);
  }

  return (
    <div className={classes.join(" ")} {...props}>
      {children}
    </div>
  );
};

const Header = ({ children, className, title, ...props }) => {
  const classes = [];
  classes.push(styles.header);
  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(" ")} {...props}>
      {title && <h1 style={{ margin: 0, fontWeight: 700 }}>{title}</h1>}
      {children}
    </div>
  );
};

const Body = ({ children, className, ...props }) => {
  const classes = [];
  classes.push(styles.body);
  if (className) {
    classes.push(className);
  }
  return (
    <div className={classes.join(" ")} {...props}>
      {children}
    </div>
  );
};

const Footer = ({ children, className, ...props }) => {
  const classes = [];
  classes.push(styles.footer);
  if (className) {
    classes.push(className);
  }
  return (
    <div className={classes.join(" ")} {...props}>
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
