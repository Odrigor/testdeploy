import React from 'react';
import '/src/css/Servicios.css'
import NavBarSecurity from '../components/NavBarSecurity';
import camara5 from '/src/icons/camara5.png'
import NavbarResponsive from "../components/NavBarResponsive"

function Servicios() {
    return (
        <>
        <NavbarResponsive /> <NavBarSecurity/>
        <div className="luz-grabaciondos"></div>
        <img className='camaracuatro' src={camara5} alt="camara decorativa" />
        <div className="servicios">
            <h1 className="titulo">Nuestros Servicios</h1>
            <ul>
                <li className="servicio">
                    <h2>Instalación de sistemas de seguridad</h2>
                    <p>Este servicio incluye la instalación de cámaras de seguridad, sistemas de alarma, sistemas de control de acceso, entre otros.</p>
                </li>
                <li className="servicio">
                    <h2>Monitoreo de seguridad</h2>
                    <p>Ofrecemos servicios de monitoreo las 24 horas del día, los 7 días de la semana, donde supervisamos activamente las cámaras de seguridad y alertamos a los propietarios o a las autoridades si detectamos alguna actividad sospechosa, apoyados en una plataforma de conectividad y redes con Inteligencia Artificial de primer nivel.</p>
                </li>
                <li className="servicio">
                    <h2>Soporte técnico y mantenimiento continuo</h2>
                    <p>Ofrecemos servicios de mantenimiento y reparación para asegurarnos de que los sistemas de seguridad sigan funcionando correctamente de manera sostenida y continua.</p>
                </li>
                <li className="servicio">
                    <h2>Consultoría de seguridad</h2>
                    <p>Este servicio puede incluir la realización de evaluaciones de riesgo, la recomendación de medidas de seguridad adecuadas en terreno proporcional a los estándares que cada uno de los clientes solicita y, en virtud del análisis ocular, se pueda sugerir soluciones eficientes.</p>
                </li>
                <li className="servicio">
                    <h2>Servicios de red</h2>
                    <p>Consiste en el desarrollo y configuración de redes, así como la solución de problemas de red y la optimización del rendimiento de la red, en el contexto de estructuración, livianas, así como robustas, alámbricas e inalámbricas, en sitios urbanos, como así también, sitios remotos.</p>
                </li>
            </ul>
        </div>
        </>
    );
}
export default Servicios;