import Container from "../Container";
import styles from "./style.module.css";

const Section = ({
  backgroundColor,
  title,
  centerTitle,
  children,
  full = true,
}) => {
  return (
    <section
      style={backgroundColor && { backgroundColor: backgroundColor }}
      className={styles.section}
    >
      {title && (
        <Container style={full && { flex: 9 }}>
          {centerTitle ? (
            <h2
              style={{ textAlign: "center" }}
              className={styles.section__title}
            >
              {title}
            </h2>
          ) : (
            <h2 className={styles.section__title}>{title}</h2>
          )}
        </Container>
      )}
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
