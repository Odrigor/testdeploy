import React from 'react';
import IconoCliente from '/src/icons/cliente.png'
import IconoExperiencia from '/src/icons/experiencia.png'
import IconoCamaras from '/src/icons/camaras.png'
import IconoSoporte from '/src/icons/soporte.png'
import '/src/css/QS.css'
import NavBarSecurity from '../components/NavBarSecurity';
import NavbarResponsive from "../components/NavBarResponsive"

function QS() {
  return (
<>
<NavbarResponsive /> <NavBarSecurity/>

    <div className="cardqs">
            <h1 className="titulo3">¿Quienes somos?</h1>
            <div className="infouno">
                <h2 className='textoInicial'>Experiencia: Ingeniería y Conocimiento</h2>
                <img className='icon' src={IconoExperiencia}  />
                <p className='parrafoQS'>Somos un equipo multidisciplinario de ingenieros, con <strong>más de 20 años de experiencia</strong> en diversas industrias. Conocemos a fondo las necesidades de conectividad y seguridad. Nuestra experiencia es su tranquilidad. 🧠🛠️📚</p>
            </div>
            <div className="infodos">
                <h2 className='textoInicial'>Tecnología: Innovación y Calidad</h2>
                <img className='icon' src={IconoCamaras} />
                <p className='parrafoQS'>Con <strong>más de mil cámaras en funcionamiento,</strong> nos enorgullece trabajar con el proveedor líder en tecnología de vigilancia. Sus soluciones de vanguardia, que incluyen inteligencia artificial para el monitoreo, nos permiten ofrecer la mejor calidad en seguridad. 🎥💡📡</p>
            </div>
            <div className="infotres">
                <h2 className='textoInicial' >Soporte Técnico: Personalizado y Eficaz</h2>
                <img className='icon' src={IconoSoporte}   />
                <p className='parrafoQS'>Nuestro soporte técnico siempre está a su lado, ofreciendo <strong>soluciones personalizadas y respuestas oportunas a sus necesidades.</strong> Con nosotros, siempre obtendrá un soporte de primer nivel. 🎯⏱️🌟</p>
            </div>

            <div className="infocuatro">
            <h2 className='textoInicial' >Nuestros Clientes: Diversidad y Alcance</h2>
            <img className="icon" src={IconoCliente} />
                <p className='parrafoQS'>Desde el estado hasta el sector privado, desde condominios hasta industrias, minas y oficinas, <strong>nuestra presencia se extiende por todos los sectores.</strong> Cada cliente es un testimonio de nuestro compromiso con la excelencia. 🏢🏘️🏭</p>
            </div>
        </div>

        </>
  );
}

export default QS;
