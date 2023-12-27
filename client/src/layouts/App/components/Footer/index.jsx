import Container from "../../../../components/Container";
import Icon from "../../../../components/Icon/Icon";
import styles from "./style.module.css";

export const socials = [
  { name: "linkedin", icon: "linkedin-fill", url: "www.linkedin.com" },
  { name: "instagram", icon: "instagram-fill", url: "www.instagram.com" },
  { name: "facebook", icon: "facebook-fill", url: "www.facebook.com" },
];

export const links = [
  { name: "profile", to: "/profile" },
  { name: "messenger", to: "/chat" },
  { name: "acount", to: "/account" },
  { name: "story", to: "/story" },
];

export const address = {
  line1: "Chestnut Avenue 88",
  line2: "",
  city: "Zwanenburg",
  zipcode: "1161VD",
  country: "Netherlands",
};

const Footer = ({ small }) => {
  return (

    <footer className={styles.footer}>
      <Container>
        <div className={styles.divider}>
          <div>Copyright © 2024 blogger.com</div>

          <div className={styles.socials}>
            {socials.map((item, i) => (
              <a href={item.url} className={styles.social__item} key={i}>
                <Icon name={item.icon} size={"20px"} />
              </a>
            ))}
          </div>
        </div>
      </Container>

    </footer>
  );
};

export default Footer;
