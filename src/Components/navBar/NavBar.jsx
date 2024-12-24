import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../navBar/NavBar.css"
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#0a2931' }}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand d-flex align-items-center" style={{ marginLeft: '6em' }}>
                        <img src="/LogoSassoNuevo.png" width={145} height={110} alt="Logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ms-auto">
                            <div className="nav-item dropdown">
                                <a 
                                    href="#"
                                    className="nav-link dropdown-toggle text-white me-3 custom-hover py-5"
                                    id="propertiesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    PROPIEDADES
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="propertiesDropdown">
                                    <li><Link to="/propList" className="dropdown-item">Venta</Link></li>
                                    <li><Link to="/propList" className="dropdown-item">Alquiler</Link></li>
                                </ul>
                            </div>

                            <Link to="/appraisalForm" className="nav-link text-white me-3 custom-hover py-5" style={{ textDecoration: 'none' }}>TASACIONES</Link>
                            <Link to="/contact" className="nav-link text-white custom-hover py-5" style={{ textDecoration: 'none' }}>CONTACTO</Link>
                            <Link to="/contact" className="nav-link text-white fw-semibold custom-hover py-5" style={{ textDecoration: 'none' }}>INICIAR SESIÓN</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div style={{ backgroundColor: '#dfcb6d', height: '10px' }}></div>
            {/* CSS para el hover */}  
            <style>
                {`  
                .custom-hover:hover {  
                    background-color: rgba(255, 193, 7, 0.2); /* Color más claro para el hover */  
                    border-radius: 5px; /* Opcional: bordes redondeados al hover */  
                }  
                `}
            </style>
        </>
    );
};

export default NavBar;
