import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm'; // Importação do hook
import './AluguelOnibus.css';

const AluguelOnibus = () => {
  const navigate = useNavigate();

  // Inicialização do hook useForm
  const { values, handleChange, handleSubmit } = useForm({
    nome: '',
    email: '',
    telefone: '',
    destino: '',
    dataIda: '',
    dataRetorno: ''
  });

  const onSubmit = (formData) => {
    console.log('Formulário enviado:', formData);
    // Lógica de envio
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
      <h1>Frete de Ônibus</h1> {/* Título da página */}
      
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="aluguel-card" key={index}>
            <FontAwesomeIcon icon={faBus} className="aluguel-icon" />
            <p>{card.text}</p> {/* Exibição completa do texto */}
          </div>
        ))}
      </div>

      {/* Formulário abaixo */}
      <div className="form-container">
        <h2>Preencha os dados e solicite um orçamento</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={values.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={values.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone / WhatsApp"
            value={values.telefone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destino"
            placeholder="Destino"
            value={values.destino}
            onChange={handleChange}
            required
          />
          <div className="form-dates">
            <input
              type="date"
              name="dataIda"
              value={values.dataIda}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="dataRetorno"
              value={values.dataRetorno}
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
      </div>
    </div>
  );
};

export default AluguelOnibus;