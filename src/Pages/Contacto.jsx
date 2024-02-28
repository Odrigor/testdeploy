import React from 'react';
import '/src/css/Contacto.css'
import mailimg from '/src/icons/em2.png'
import telimg from '/src/icons/tel.png'
import mapaimg from '/src/icons/mapa.png'
import relojimg from '/src/icons/reloj.png'
import NavBarSecurity from '../components/NavBarSecurity';

import NavbarResponsive from "../components/NavBarResponsive"
import BarraMarcas from '../components/BarraMarcas';

const Contacto = () => (
  <>
  <NavbarResponsive /> <NavBarSecurity/>
  <div className='contact'>
    <div className='contact-info'>
      <h1>INFORMACIÓN DE CONTACTO</h1>
      <div className='infocincoo'>
      <img className='icontact' src={mailimg}></img>
      <p className='textoInicial'>contacto@tecnosecuritydata.cl</p>
      </div>
      
      <div className='infocincoo'>
      <img className='icontact' src={telimg}></img>
      <p className='textoInicial'>+9 5667 7421</p>
      </div>

      <div className='infocincoo'>
      <img className='icontact' src={mapaimg}></img>
      <p className='textoInicial'>Region Metropolitana, Colina<br/>Región de Valparaíso <br/>Los Andes <br/>San Felipe <br/>Rinconada</p>
      </div>

      <div className='infocincoo'>
      <img className='icontact' src={relojimg}></img>
      <p className='textoInicial'>oficinas abiertas desde 08:00 hasta 17:00 hrs</p>
      </div>
      
    </div>
    <BarraMarcas></BarraMarcas>
  </div>

  </>
);

export default Contacto;
