import { NavLink as RRDNavLink, Link as RRDLink } from "react-router-dom";

import styles from "./style.module.css";

const Link = ({
  children,
  button,
  nav,
  bold,
  small,
  underline,
  className,
  ...props
}) => {
  const classes = [];
  let Component = button ? "button" : nav ? RRDNavLink : RRDLink;

  classes.push(styles.link);

  if (underline) {
    classes.push(styles["link--underline"]);
  }

  if (nav) {
    classes.push(styles["link--nav"]);
  }

  if (className) {
    classes.push(className);
  }

  if (bold) {
    classes.push(styles["link--bold"]);
  }

  if (small) {
    classes.push(styles["link--small"]);
  }

  return (
    <Component className={classes.join(" ")} {...props}>
      {children}
    </Component>
  );
};

export const withLink = (WrappedComponent) => {
  return ({ to, className, ...props }) => (
    <RRDLink className={className} to={to}>
      <WrappedComponent {...props} />
    </RRDLink>
  );
};

export default Link;
