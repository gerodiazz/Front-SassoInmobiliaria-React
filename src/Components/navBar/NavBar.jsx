import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="d-flex justify-content-between bg-dark w-100">
                    <div className="d-flex">
                        <img width={60} height={60} className="bg-success" alt="Logo" />
                    </div>
                    <div className="d-flex justify-content-end bg-primary w-100 p-4 pe-5">
                        <Link to="/propList" className="btn btn-primary text-white me-2">
                            Propiedades
                        </Link>
                        <Link to="/appraisalForm" className="btn btn-primary text-white me-2">
                            Tasaciones
                        </Link>
                        <Link to="/contact" className="btn btn-primary text-white pe-5">
                            Contacto
                        </Link>
                    </div>
                </div>
                <div className="py-1" />
                <div className="py-3 bg-warning" />
            </nav>
        </>
    );
};

export default NavBar;