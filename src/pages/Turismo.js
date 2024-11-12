import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Turismo.css';

const destinos = [
  {
    nome: 'Beto Carrero World',
    imagem: require('../assets/beto-carrero.jpg'),
    ida: '26/11 às 22:00',
    retorno: '27/11 às 20:00',
  },
  {
    nome: 'Aparecida do Norte',
    imagem: require('../assets/aparecida.jpg'),
    ida: '24/12 às 22:00',
    retorno: '27/12 às 14:00',
  },
  {
    nome: 'Gramado',
    imagem: require('../assets/gramado.jpg'),
    ida: '01/12 às 19:00',
    retorno: '03/12 às 22:00',
  },
  {
    nome: 'Rio de Janeiro',
    imagem: require('../assets/rio-de-janeiro.jpg'),
    ida: '15/12 às 21:00',
    retorno: '18/12 às 23:00',
  },
];

const Turismo = () => {
  const navigate = useNavigate(); 

  return (
    <div className="turismo-page">
      <h2 className="turismo-title">Destinos de Turismo</h2>
      <div className="destinos-container">
        {destinos.map((destino, index) => (
          <div className="destino-card" key={index}>
            <img src={destino.imagem} alt={destino.nome} className="destino-imagem" />
            <div className="destino-info">
              <h3>{destino.nome}</h3>
              <p>Ida: {destino.ida}</p>
              <p>Retorno: {destino.retorno}</p>
              <button onClick={() => navigate('/contato')} className="btn-contato">Entre em Contato</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Turismo;