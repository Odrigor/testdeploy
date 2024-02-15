import React from 'react';
import { Link } from 'react-router-dom';
import fotouno from '/src/images/art-1.webp'
import fotodos from '/src/images/art-2.webp'
import fototres from '/src/images/art-3.webp'
import '/src/css/Articulos.css'
import NavBarSecurity from '../components/NavBarSecurity';
import NavbarResponsive from "../components/NavBarResponsive"


function Articulos() {
  return (
    <>
    <NavbarResponsive /> <NavBarSecurity/>
    <div className='articulos'>
      <h1 className='tituloarticulos'>Cámaras de seguridad Chile</h1>
        <Link to='/articleone' className='card'>
        <div className= 'card-contentun'>
        <img className='card-img' src={fotouno} alt='Trabajadores caminando por un parking con camaras de seguridad' />
        <div className='verticalidad-card'>
        <h2 className='card-title'>Cómo las cámaras de seguridad pueden mejorar la seguridad de tu empresa</h2>
        <p className='card-description' >Que efectos tiene aumentar la sensacion de seguridad al interior de una empresa ?</p>
        </div>
        </div>
        </Link>

        <Link to='/articletwo' className='card'>
        <div className= 'card-contentun'>
        <img className='card-img' src={fotodos} alt='poster de una camara de sguridad estilo gamer, con un eslogan de lets work' />
        <div className='verticalidad-card'>
        <h2 className='card-title'>Cómo es el proceso de instalacion de camaras de seguridad</h2>
        <p className='card-description' >Descripcion de como seria trabajar con nostros</p>
        </div>
        </div>
        </Link>

        <Link to='/articlethree' className='card'>
        <div className= 'card-contentun'>
        <img className='card-img' src={fototres} alt='una camara de seguridad conectada a un notebook que en su pantalla se ve un emoji de una cara feliz' />
        <div className='verticalidad-card'>
        <h2 className='card-title'>que funcion cumple la IA en las camaras de seguridad</h2>
        <p className='card-description' >Cuales son los riesgos y beneficios del uso de inteligencia artificial</p>
        </div>
        </div>
        </Link> 
    </div>
    </>
  );
}

export default Articulos;
