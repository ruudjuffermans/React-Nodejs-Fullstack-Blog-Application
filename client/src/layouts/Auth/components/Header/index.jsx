import { useState } from "react";
import Container from "../../../../components/Container";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const navigationLinks = [
  { name: "Login", to: "/login" },
  { name: "Register", to: "/register" },
  { name: "Forgot Password", to: "/forgot-password" },
  { name: "Home", to: "/" },
];

const Header = ({ navigation = [...navigationLinks] }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Container>
        <header className={styles.header}>
          <div className={styles.header__logo}>
            <a href="/">LOGO</a>
          </div>

          <div className={styles.header__nav}>
            {navigation.map(({ name, to }, i) => (
              <div key={i}>
                <NavLink className={({ isActive }) =>
                  isActive ? `${styles.header__link} ${styles.active}` : styles.header__link}
                  to={to}>
                  {name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className={styles.header__right}></div>
        </header>
      </Container>
    </div>
  );
};

export default Header;
