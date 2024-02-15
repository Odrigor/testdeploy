import BarraMarcas from "../components/BarraMarcas"
import NavbarResponsive from "../components/NavBarResponsive"
import Carrusel from "/src/components/Carrusel"
import NavBarSecurity from "/src/components/NavBarSecurity"
import '/src/css/App.css'
import '/src/css/Button.css'
import { Link } from 'react-router-dom'
function Home() {
  const isMobile = window.innerWidth < 768;
  return (
    <>
  <div className='Cameraa'>
  <div className="luz-grabacion"></div>
  <div className='Base'></div>
  <div className="semicircle2"></div>
  <div className="semicircle1"></div> 
  <div className="semicircle3"></div> 
 </div>

        <NavbarResponsive /> <NavBarSecurity/>
        <Carrusel></Carrusel>
        <Link to='/contact' style={{ display: 'flex', justifyContent: 'center' }}><button className="custom-btn btn-1">¡Me interesa!</button></Link>
        <BarraMarcas></BarraMarcas>
    </>
  )
}

export default Home
