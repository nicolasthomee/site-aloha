import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './AluguelOnibus.css';

const AluguelOnibus = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    destino: '',
    dataIda: '',
    dataRetorno: ''
  });
  const [showMessage, setShowMessage] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Formulário:', formData);

    setShowMessage(true);

    setFormData({
      nome: '',
      email: '',
      telefone: '',
      destino: '',
      dataIda: '',
      dataRetorno: ''
    });

    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  const cards = [
    { text: "Desenvolvemos uma logística de transporte otimizada para sua empresa. Atendemos contratos fixos e serviços temporários. Nossa equipe é capacitada para transporte empresarial." },
    { text: "Atendemos os mais diferentes tipos de eventos no Brasil e Exterior. A flexibilidade de horários e a diversidade da nossa frota nos permitem ter a agilidade necessária para eventos." },
    { text: "Seu sonho é conhecer lugares diferentes? Você escolhe o destino e nós oferecemos as melhores opções para sua viagem aos países da América do Sul." },
    { text: "Grupos da melhor idade, religiosos, familiares, escolas, times de futebol, compras. Você escolhe o destino e nós oferecemos as melhores condições para a sua viagem." },
    { text: "Desenvolvemos uma logística de transporte otimizada para você e sua empresa. Atendemos contratos fixos e serviços temporários. Somos capacitados para atender você e sua empresa." },
    { text: "Programamos seu translado para quaisquer aeroportos do Brasil. O conforto e a pontualidade são garantidos por nosso serviço competente." }
  ];

  return (
    <div className="aluguel-container">
      <h1>Frete de Ônibus</h1>

      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="aluguel-card" key={index}>
            <FontAwesomeIcon icon={faBus} className="aluguel-icon" />
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="form-container">
        <h2>Preencha os dados e solicite um orçamento</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone / WhatsApp"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destino"
            placeholder="Destino"
            value={formData.destino}
            onChange={handleChange}
            required
          />
          <div className="form-dates">
            <input
              type="date"
              name="dataIda"
              value={formData.dataIda}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="dataRetorno"
              value={formData.dataRetorno}
              onChange={handleChange}
            />
          </div>
          <div className="form-buttons">
            <button
              type="button"
              className="button"
              onClick={() => navigate('/nossa-frota')}
            >
              Conhecer Frota
            </button>
            <button type="submit" className="button">
              Fazer Orçamento
            </button>
          </div>
        </form>

        {/* Exibir mensagem de confirmação */}
        {showMessage && <p className="success-message">Orçamento Solicitado!</p>}
      </div>
    </div>
  );
};

export default AluguelOnibus;