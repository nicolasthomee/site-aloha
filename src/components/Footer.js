import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-socials">
        <a href="https://www.facebook.com/alohaguarapuava" className="social-link" target="_blank" rel="noopener noreferrer" id='facebook'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/alohaturismoguarapuava/" className="social-link" target="_blank" rel="noopener noreferrer" id='instagram'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://wa.me/5542999850000" className="social-link" target="_blank" rel="noopener noreferrer" id='whatsapp'>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <p className="footer-text">© 2024 Aloha Turismo - Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;