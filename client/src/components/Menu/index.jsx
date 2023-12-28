import Icon from "../Icon/Icon";
import Link from "../Link";

import styles from "./style.module.css";
import Modal from "../Modal";

const data = [
  { name: "Login", to: "/login" },
  { name: "Register", to: "/register" },
  { name: "Forgot Password", to: "/forgot-password" },
  { name: "Profile", to: "/profile" },
  { name: "Chat", to: "/chat" },
  { name: "Account", to: "/account" },
  { name: "Create Blog", to: "/create-blog" },
  { name: "Blog Post", to: "/post" },
  { name: "Logout", to: "/login" },
];

const Menu = ({ show, setShow }) => {
  return (
    <Modal enter={show} setEnter={setShow}>
      {({ state }) => (
        <div className={[styles.drawer, styles[`drawer--${state}`]].join(" ")}>
          <button onClick={() => setShow(false)}>
            <Icon name={"close-fill"} size={"32px"} color="white" />
          </button>
          <ul className={styles.menu__list}>
            {data.map((item, i) => (
              <li key={i} className={styles.menu__item}>
                <Link
                  underline
                  className={styles.drawer__link}
                  onClick={() => setShow(false)}
                  to={item.to}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Modal>
  );
};

export default Menu;
