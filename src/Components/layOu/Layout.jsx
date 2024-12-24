import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar"

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <div >
                <h1 className="d-flex justify-content-center p-5">Bienvenidos a Sasso Inmobiliaria</h1>
            </div>
    </>
  );
};

export default Layout;