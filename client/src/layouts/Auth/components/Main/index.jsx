import Container from "../../../../components/Container";
import styles from "./styles.module.css";

const Main = ({ children }) => {
  return (
    <main className={styles.main}>
      <Container>
        <main className={styles.main__top}>
          <main className={styles.main__center}>{children}</main>
        </main>
      </Container>
    </main>
  );
};

export default Main;
