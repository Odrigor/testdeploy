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
                    <p>Ofrecemos servicios de monitoreo las 24 horas del día, los 7 días de la semana, donde supervisamos activamente las cámaras de seguridad y alertamos a los propietarios o a las autoridades si detectamos alguna actividad sospechosa.</p>
                </li>
                <li className="servicio">
                    <h2>Mantenimiento y reparación</h2>
                    <p>Ofrecemos servicios de mantenimiento y reparación para asegurarnos de que los sistemas de seguridad sigan funcionando correctamente.</p>
                </li>
                <li className="servicio">
                    <h2>Consultoría de seguridad</h2>
                    <p>Este servicio puede incluir la realización de evaluaciones de riesgo, la recomendación de medidas de seguridad adecuadas y la formación del personal en prácticas de seguridad.</p>
                </li>
                <li className="servicio">
                    <h2>Servicios de red</h2>
                    <p>Esto consiste en el desarrollo y configuración de redes, así como la solución de problemas de red y la optimización del rendimiento de la red, en el contexto de estructuracion, livianas, asi como robustas, alambricas e inalambricas, en sitios urbanos, como asi tambien, sitios remotos.</p>
                </li>
            </ul>
        </div>
        </>
    );
}
export default Servicios;