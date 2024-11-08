import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import OpenStreetMap from '../components/OpenStreetMap';
import './Contato.css';

const Contato = () => {
  return (
    <div className="contato-page">
      <h2 className="contato-title">Entre em contato conosco</h2>

      {/* Informações de contato */}
      <div className="contato-links">
        <Link to="https://wa.me/99999999999" target="_blank" className="contato-link">
          <FaWhatsapp className="contato-icon" id='whatsapp'/>
          <span>(42) 99985-0000</span>
        </Link>
        <Link to="https://www.instagram.com/aloha_turismo" target="_blank" className="contato-link">
          <FaInstagram className="contato-icon" id='instagram'/>
          <span>@alohaturismoguarapuava</span>
        </Link>
        <Link to="https://www.facebook.com/AlohaTurismo" target="_blank" className="contato-link">
          <FaFacebook className="contato-icon" id='facebook'/>
          <span>/alohaguarapuava</span>
        </Link>
        <div className="contato-link" id='email'>
          <FaEnvelope className="contato-icon" />
          <span>alohaturismo@hotmail.com</span>
        </div>
      </div>

      {/* Adicionando o mapa */}
      <OpenStreetMap />
    </div>
  );
};

export default Contato;
