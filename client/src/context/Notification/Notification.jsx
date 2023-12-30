import React, { useState } from "react";
import styles from "./style.module.css";
import Icon from "../../components/Icon";

export const NotificationWrapper = ({ children }) => {
  return <div className={styles.notification__wrapper}>{children}</div>;
};

const Notification = ({ dispatch, id, status, message }) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const i = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(i);
        return prev;
      });
    }, 20);

    setIntervalID(i);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id: id,
      });
    }, 400);
  };

  React.useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
  }, [width]);

  React.useEffect(() => {
    handleStartTimer();
  }, []);
  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`${styles.notification__item} ${styles[`notification__item--${status}`]
        }  ${exit && styles.exit}`}
    >
      <span
        onClick={() => handleCloseNotification()}
        className={styles.notification__close}
      >
        <Icon size={"20px"} name={"close"} />
      </span>
      <span className={styles.notification__icon}>
        <Icon size={"44px"} name={"check_circle"} />
      </span>
      <div className={styles.notification__body}>
        <span className={styles.notification__message}>{message}</span>
        <div className={styles.notification__bar}></div>
      </div>
    </div>
  );
};

export default Notification;
