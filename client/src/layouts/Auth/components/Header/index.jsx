import { useState } from "react";
import Container from "../../../../components/Container";
import Link from "../../../../components/Link";
import Menu from "../../../../components/Menu";
import styles from "./style.module.css";
import Icon from "../../../../components/Icon/Icon";
import Button from "../../../../components/Button";

const navigationLinks = [
  { name: "Login", to: "/login" },
  { name: "Register", to: "/register" },
  { name: "Forgot Password", to: "/forgot-password" },
  { name: "Chat", to: "/chat" },
  { name: "Profile", to: "/profile" },
  { name: "Story", to: "/story" },
];

const Header = ({ navigation = [...navigationLinks] }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Container>
        <header className={styles.header}>
          <div className={styles.header__menu}>menu</div>
          <div className={styles.header__logo}>
            <a href="/">LOGO</a>
          </div>

          <ul className={styles.header__nav}>
            {navigation.map(({ name, to }, i) => (
              <li key={i}>
                <Button key={i} to={to}>
                  {name}
                </Button>
              </li>
            ))}
          </ul>
          <div className={styles.header__right}></div>
        </header>
      </Container>
    </div>
  );
};

export default Header;
