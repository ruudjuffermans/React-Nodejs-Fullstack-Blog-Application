import AuthContextProvider from "./context/Auth";
import NotificationContextProvider from "./context/Notification";
import Router from "./router";

const App = () => {
  return (
    <AuthContextProvider>
      <NotificationContextProvider>
        <Router />
      </NotificationContextProvider>
    </AuthContextProvider>

  )
};

export default App;
