// pages/index.js
import React, { useState } from 'react';

const treinoInicial = [
  {
    grupo: "Peito",
    exercicios: [
      {
        nome: "Supino reto (maquina)",
        imagem: "/imagens/supino_reto.png",
      },
      {
        nome: "Supino inclinado (halteres)",
        imagem: "/imagens/supino_inclinado.png",
      },
    ],
  },
  {
    grupo: "Bíceps",
    exercicios: [
      {
        nome: "Rosca direta barra W",
        imagem: "/imagens/rosca_direta.png",
      },
      {
        nome: "Rosca concentrada",
        imagem: "/imagens/rosca_concentrada.png",
      },
    ],
  },
];

export default function Treinos() {
  const [treinos, setTreinos] = useState(treinoInicial);
  const [modoEdicao, setModoEdicao] = useState(false);

  const toggleEdicao = () => {
    setModoEdicao(!modoEdicao);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1><strong>TREINOS RAY</strong></h1>
      <button onClick={toggleEdicao}>Editar treino</button>
      {treinos.map((grupo, index) => (
        <div key={index}>
          <h2>{grupo.grupo}</h2>
          {grupo.exercicios.map((exercicio, idx) => (
            <div key={idx}>
              <p>{exercicio.nome}</p>
              <img
                src={exercicio.imagem}
                alt={exercicio.nome}
                width="300"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
