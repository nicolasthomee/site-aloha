import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel'; 
import './Inicio.css';

function Inicio() {
  return (
    <div className="inicio-page">
      <div className="carousel-container">
        <Carousel />
      </div>

      <div className="sections-container">
        <div className="section-box">
          <Link to="/aluguel-onibus" className="section-link">
            <img src={require('../assets/frete.png')} alt="Frete de Ônibus" className="section-image" />
            <div className="section-overlay">Frete de Ônibus</div>
          </Link>
        </div>

        <div className="section-box">
          <Link to="/turismo" className="section-link">
            <img src={require('../assets/turismo.png')} alt="Turismo" className="section-image" />
            <div className="section-overlay">Turismo</div>
          </Link>
        </div>

        <div className="section-box">
          <Link to="/nossa-frota" className="section-link">
            <img src={require('../assets/frota.png')} alt="Nossa Frota" className="section-image" />
            <div className="section-overlay">Nossa Frota</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Inicio;