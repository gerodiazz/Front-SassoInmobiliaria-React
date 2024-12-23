import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(11, 47, 53)' }}>
                <div className="container-fluid">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img 
                            src="/LogoSassoNuevo.png" 
                            width={140} 
                            height={110} 
                            alt="Logo" 
                        />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links de navegación */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ms-auto">
                            <Link 
                                to="/propList" 
                                className="nav-link text-white me-3"
                                style={{ textDecoration: 'none' }}
                            >
                                PROPIEDADES
                            </Link>
                            <Link 
                                to="/appraisalForm" 
                                className="nav-link text-white me-3"
                                style={{ textDecoration: 'none' }}
                            >
                                TASACIONES
                            </Link>
                            <Link 
                                to="/contact" 
                                className="nav-link text-white"
                                style={{ textDecoration: 'none' }}
                            >
                                CONTACTO
                            </Link>
                            <Link 
                                to="/contact" 
                                className="nav-link text-white fw-semibold"
                                style={{ textDecoration: 'none' }}
                            >
                                INICIAR SESIÓN
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Línea amarilla debajo */}
                <div style={{ backgroundColor: 'rgb(255, 193, 7)', height: '4px' }} />
            </nav>
        </>
    );
};

export default NavBar;
