import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar"

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;