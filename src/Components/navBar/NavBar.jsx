import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div 
                    className="d-flex justify-content-between w-100" 
                    style={{ backgroundColor: 'rgb(11, 47, 53)' }}
                >
                    <div className="d-flex" style={{ backgroundColor: 'rgb(11, 47, 53)', padding: '10px', borderRadius: '10px' // Opcional, redondea bordes
    }}>
                        <img 
                            src="/LogoSassoNuevo.png" 
                            width={130} 
                            height={110} 
                            className="bg-success" 
                            alt="Logo" 
                        />
                    </div>
                    <div 
                        className="d-flex justify-content-end w-100 p-4 pe-5" 
                        style={{ backgroundColor: 'rgb(11, 47, 53)' }} 
                    >
                        <Link to="/propList" className="btn btn-primary text-white me-2" style={{ backgroundColor: 'rgb(11, 47, 53)' }}>
                            Propiedades
                        </Link>
                        <Link to="/appraisalForm" className="btn btn-primary text-white me-2" style={{ backgroundColor: 'rgb(11, 47, 53)' }}>
                            Tasaciones
                        </Link>
                        <Link to="/contact" className="btn btn-primary text-white pe-5" style={{ backgroundColor: 'rgb(11, 47, 53)' }}>
                            Contacto
                        </Link>
                    </div>
                </div>
                <div className="py-1" />
                <div className="py-3" style={{ backgroundColor: 'rgb(255, 193, 7)' }} />
            </nav>
        </>
    );
};

export default NavBar;