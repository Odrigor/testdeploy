import React, { useState } from 'react';
import '/src/css/CarruselComponent.css'

import fotouno from '/src/images/1.jpg'
import fotodos from '/src/images/2.jpg'
import fototres from '/src/images/3.jpg'
import fotocuatro from '/src/images/4.jpg'
import fotocinc from '/src/images/5.jpg'

export default function Carrusel() {
    const [description, setDescription] = useState('Desarrollo de proyectos en telecomunicaciones, conectividad y redes, cámaras de seguridad');

  return (
    <>
    <div className='carrusel'>
        <img className='img1' src={fotouno} onMouseEnter={(e)=> setDescription('Instalación de cámaras de seguridad')} onMouseLeave={(e)=> setDescription('Desarrollo de proyectos en telecomunicaciones, conectividad y redes, cámaras de seguridad')}></img>
        <img className='img2' src={fotodos} onMouseEnter={(e)=> setDescription('Análisis de señales y conectividad')} onMouseLeave={(e)=> setDescription('Desarrollo de proyectos en telecomunicaciones, conectividad y redes, cámaras de seguridad')} ></img>
        <img className='img3' src={fototres} onMouseEnter={(e)=> setDescription('Conectividad en redes alámbricas e inalámbricas, locales y remotas')} onMouseLeave={(e)=> setDescription('Desarrollo de proyectos en telecomunicaciones, conectividad y redes, cámaras de seguridad')} ></img>
        <img className='img4' src={fotocuatro} onMouseEnter={(e)=> setDescription('Monitoreo en tiempo real 24/7')} onMouseLeave={(e)=> setDescription('Desarrollo de proyectos en telecomunicaciones, conectividad y redes, cámaras de seguridad')} ></img>
        <img className='img5' src={fotocinc} onMouseEnter={(e)=> setDescription('Inteligencia artificial en el monitoreo')} onMouseLeave={(e)=> setDescription('Desarrollo de proyectos en telecomunicaciones, conectividad y redes, cámaras de seguridad')} ></img>
    </div>
    {/* <p className='description'>{description}</p>*/}
    <div className='cardText'>
      <h1 className='titulo'>{description}</h1>
      <p className='parrafo'>En un mundo cada vez más digital, la seguridad y la conectividad son fundamentales para el éxito de cualquier empresa. Nuestros <strong>Servicios Profesionales de Cámaras de Seguridad y Conectividad</strong> ofrecen soluciones personalizadas para proteger sus activos y mantener su negocio conectado. Utilizamos sistemas de vigilancia que emplean <strong>inteligencia artificial</strong> para asistir en el monitoreo, proporcionando una capa adicional de seguridad y eficiencia. Con tecnología de vanguardia y un equipo de expertos dedicados, nos comprometemos a proporcionar un servicio excepcional que cumpla con sus necesidades específicas. Proteja su empresa con nuestros servicios de seguridad y manténgase conectado con nuestras soluciones de conectividad. Contáctenos hoy para una consulta gratuita.</p>
    </div>
    
    </>
  )
}