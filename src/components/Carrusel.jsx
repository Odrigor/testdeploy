import React, { useState } from 'react';
import '/src/css/CarruselComponent.css'

export default function Carrusel() {
    const [description, setDescription] = useState('Dearrollo de proyectos en Telecomunicaciones, Conectividad y redes, camras de seguridad  ');

  return (
    <>
    <div className='carrusel'>
        <img className='img1' src='./src/images/1.jpg' onMouseEnter={(e)=> setDescription('Instalacion de camaras')} onMouseLeave={(e)=> setDescription('Servicios Profesionales de Cámaras de Seguridad y Conectividad')}></img>
        <img className='img2' src='./src/images/2.jpg' onMouseEnter={(e)=> setDescription('Analisis de señales y conectividad')} onMouseLeave={(e)=> setDescription('Servicios Profesionales de Cámaras de Seguridad y Conectividad')} ></img>
        <img className='img3' src='./src/images/3.jpg' onMouseEnter={(e)=> setDescription('Conectividad en redes alambricas e inalambricas, locales y remotas')} onMouseLeave={(e)=> setDescription('Servicios Profesionales de Cámaras de Seguridad y Conectividad')} ></img>
        <img className='img4' src='./src/images/4.jpg' onMouseEnter={(e)=> setDescription('Monitoreo en tiempo real 24/7')} onMouseLeave={(e)=> setDescription('Servicios Profesionales de Cámaras de Seguridad y Conectividad')} ></img>
        <img className='img5' src='./src/images/5.jpg' onMouseEnter={(e)=> setDescription('Inteligencia Artifical en el monitoreo')} onMouseLeave={(e)=> setDescription('Servicios Profesionales de Cámaras de Seguridad y Conectividad')} ></img>
    </div>
    {/* <p className='description'>{description}</p>*/}
    <div className='cardText'>
      <h1 className='titulo'>{description}</h1>
      <p className='parrafo'>En un mundo cada vez más digital, la seguridad y la conectividad son fundamentales para el éxito de cualquier empresa. Nuestros <strong>Servicios Profesionales de Cámaras de Seguridad y Conectividad</strong> ofrecen soluciones personalizadas para proteger sus activos y mantener su negocio conectado. Utilizamos sistemas de vigilancia que emplean <strong>inteligencia artificial</strong> para asistir en el monitoreo, proporcionando una capa adicional de seguridad y eficiencia. Con tecnología de vanguardia y un equipo de expertos dedicados, nos comprometemos a proporcionar un servicio excepcional que cumpla con sus necesidades específicas. Proteja su empresa con nuestros servicios de seguridad y manténgase conectado con nuestras soluciones de conectividad. Contáctenos hoy para una consulta gratuita.</p>
    </div>
    
    </>
  )
}