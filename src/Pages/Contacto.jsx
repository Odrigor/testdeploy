import React from 'react';
import '/src/css/Contacto.css'
import mailimg from '/src/icons/em2.png'
import telimg from '/src/icons/tel.png'
import mapaimg from '/src/icons/mapa.png'
import relojimg from '/src/icons/reloj.png'
import NavBarSecurity from '../components/NavBarSecurity';
import BarraMarcas from '../components/BarraMarcas';
import NavbarResponsive from "../components/NavBarResponsive"

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
      <p className='textoInicial'>+1(585) 902 9665</p>
      </div>

      <div className='infocincoo'>
      <img className='icontact' src={mapaimg}></img>
      <p className='textoInicial'>Region Metropolitana, Colina, Esmeralda 600-398</p>
      </div>

      <div className='infocincoo'>
      <img className='icontact' src={relojimg}></img>
      <p className='textoInicial'>oficinas abiertas desde 08:00 hasta 20:00</p>
      </div>
      
    </div>
    
  </div>

  <BarraMarcas></BarraMarcas>
  </>
);

export default Contacto;
