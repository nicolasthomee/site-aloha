import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NossaFrota.css';

function NossaFrota() {
  const navigate = useNavigate();

  const onibusData = [
    {
      id: 2019,
      imagem: require('../assets/azul-2019.png'),
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2611,
      imagem: require('../assets/laranja-2611.png'),
      descricao: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: 2018,
      imagem: require('../assets/g8-2018.png'),
      descricao: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      id: 1203,
      imagem: require('../assets/cinza-1203.png'),
      descricao: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
    },
    {
      id: 1506,
      imagem: require('../assets/verde-1506.png'),
      descricao: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
  ];

  const handleVejaMais = () => {
    navigate('/contato');
  };

  return (
    <div className="nossa-frota">
      <h1>Nossa Frota</h1>
      <div className="frota-container">
        {onibusData.map((onibus) => (
          <div key={onibus.id} className="frota-item">
            <img src={onibus.imagem} alt={`Ônibus ${onibus.id}`} className="frota-image" />
            <div className="frota-info">
              <h2>Ônibus {onibus.id}</h2>
              <p>{onibus.descricao}</p>
              <button onClick={handleVejaMais} className="btn-veja-mais">Veja Mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NossaFrota;