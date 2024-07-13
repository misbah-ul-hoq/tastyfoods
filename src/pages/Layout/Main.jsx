import { Outlet } from "react-router-dom";
import Nav from "../../components/shared/Nav";
import Footer from "../../components/shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
