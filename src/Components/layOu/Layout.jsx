import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar"
import FooterBar from "../footerBar/FooterBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <FooterBar/>
    </>
  );
};

export default Layout;