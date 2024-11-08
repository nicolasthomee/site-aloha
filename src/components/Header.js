import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importar ícones
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <img src={require('../assets/logo.png')} alt="Aloha Turismo" className="logo-img" />
        
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>Início</Link>
          <Link to="/aluguel-onibus" className="nav-link" onClick={toggleMenu}>Frete de Ônibus</Link>
          <Link to="/turismo" className="nav-link" onClick={toggleMenu}>Turismo</Link>
          <Link to="/nossa-frota" className="nav-link" onClick={toggleMenu}>Nossa Frota</Link>
          <Link to="/contato" className="nav-link" onClick={toggleMenu}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;