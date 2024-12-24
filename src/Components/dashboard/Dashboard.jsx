import { useState } from "react";

const Dashboard = () => {  
    const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);  

    const buttonBackground = (index) => {  
        const images = [  
            { src: '../../../public/casa.jpg' },  
            { src: '../../../public/depto.jpg' },  
            { src: '../../../public/edificio.jpg' },  
            { src: '../../../public/campo.jpg' },  
        ];  
        return `url(${images[index].src})`;  
    };  

    const buttonStyle = (index) => ({  
        position: 'relative',  
        flex: 1,  
        height: '100%',  
        backgroundImage: buttonBackground(index),  
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        color: 'white',  
        border: 'none',  
        fontSize: '24px',  
        fontWeight: 'bold',  
        transition: 'transform 0.3s, box-shadow 0.3s, filter 0.3s',  
        display: 'flex',  
        justifyContent: 'center',  
        alignItems: 'center',  
        cursor: 'pointer',  
        margin: '0',  
        overflow: 'hidden',  
        filter: hoveredButtonIndex === index ? 'none' : 'grayscale(100%)', // Filtro gris  
        transform: hoveredButtonIndex === index ? 'scale(1.1) skew(-20deg)' : 'skew(-20deg)',  
        boxShadow: hoveredButtonIndex === index ? '0 8px 20px rgba(0, 0, 0, 0.3)' : 'none',  
    });  

    const buttonContentStyle = {  
        transform: 'skew(20deg)',  
        width: '100%',  
        textAlign: 'center', // Centrar el texto  
        position: 'relative', // Para asegurar que el texto se sitúe correctamente  
        color: 'white', // Color del texto  
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra del texto para simular borde 
    };  

    return (  
        <>  
            <div>    
                <div className="menu" style={{ display: 'flex', height: 'calc(100vh - 60px)', justifyContent: 'space-between', padding: '0 10px' }}>  
                    {['CASAS', 'DEPARTAMENTOS', 'EMPRENDIMIENTOS', 'RURAL'].map((label, index) => (  
                        <button  
                            key={index}  
                            className="button"  
                            style={buttonStyle(index)}  
                            onMouseEnter={() => setHoveredButtonIndex(index)}  
                            onMouseLeave={() => setHoveredButtonIndex(null)}  
                            onClick={() => alert(`${label} seleccionada`)}  
                        >  
                            <div style={buttonContentStyle}>{label}</div>  
                        </button>  
                    ))}  
                </div>  
            </div>  
        </>  
    );  
};  

export default Dashboard; 