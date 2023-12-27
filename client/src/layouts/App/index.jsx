import { Outlet } from "react-router-dom";
import Page from "../../components/Page";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const AppLayout = () => {
  console.log("layout");
  return (
    <Page>
      <Header />
      <Main>
        <Outlet context={123} />
      </Main>
      <Footer />
    </Page>
  );
};

export default AppLayout;
