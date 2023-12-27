import { Outlet } from "react-router-dom";
import Page from "./components/Page";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const AppLayout = () => {
  return (
    <Page>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Page>
  );
};

export default AppLayout;
