import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/css/Menu.css'
const NavbarResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className='navcenterbutton'>Navegar</button>
      {isOpen && (
        <div className="menu">
          <ul>
            <li><Link to='/' className='botonnavarresponsive'>Home</Link></li>
            <li><Link to='/about'>Quienes somos</Link></li>
            <li><Link to='/services'>Servicios</Link></li>
            <li><Link to='/articles'>Articulos</Link></li>
            <li><Link to='/contact'>Contacto</Link></li>
          </ul>
          <button onClick={handleClose}>X</button>
        </div>
      )}
    </div>
  );
};

export default NavbarResponsive;