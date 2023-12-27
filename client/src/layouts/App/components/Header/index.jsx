import { useState } from "react";
import Container from "../../../../components/Container";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const navigationLinks = [
  { name: "logout", to: "/login" },
  { name: "profile", to: "/profile/1" },
  { name: "post", to: "/post/1" },
  { name: "account", to: "/account" },
];

const Header = ({ navigation = [...navigationLinks] }) => {
  const [show, setShow] = useState(false);
  return (

    <header className={styles.header}>
      <Container>
        <div className={styles.divider}>
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
