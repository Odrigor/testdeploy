import React from 'react';
import '/src/css/NavBarSecurityComponent.css'
import { Link } from 'react-router-dom';

export default function NavBarSecurity() {
    return (
        <div className='navCont'>
        <nav>
            <ul>
            <li><Link to='/'><button>Home</button></Link></li>
                <li><Link to='/about'><button>Quienes somos</button></Link></li>
                <li><Link to='/services'><button>Servicios</button></Link></li>
                <li><Link to='/articles'><button>Articulos</button></Link></li>
                <li><Link to='/contact'><button>Contacto</button></Link></li>
            </ul>
        </nav>
        </div>
    );
}
