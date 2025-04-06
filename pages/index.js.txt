import { useState } from "react";

const treinoInicial = [
  {
    grupo: "Peito",
    exercicios: [
      {
        nome: "Supino reto (maquina)",
        imagem: "https://www.hipertrofia.org/blog/wp-content/uploads/2017/05/supino-reto.jpg"
      },
      {
        nome: "Supino inclinado (halteres)",
        imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/05/supino-inclinado-com-halteres.jpg"
      }
    ]
  },
  {
    grupo: "Biceps",
    exercicios: [
      {
        nome: "Rosca direta barra W",
        imagem: "https://www.hipertrofia.org/blog/wp-content/uploads/2021/06/rosca-direta-barra-w.jpg"
      },
      {
        nome: "Rosca concentrada",
        imagem: "https://www.hipertrofia.org/blog/wp-content/uploads/2022/02/rosca-concentrada.jpg"
      }
    ]
  }
];

export default function Home() {

  const [treino, setTreino] = useState(treinoInicial);
  const [modoEdicao, setModoEdicao] = useState(false);

  const atualizarExercicio = (grupoIndex, exIndex, campo, valor) => {
    const novo = [...treino];
    novo[grupoIndex].exercicios[exIndex][campo] = valor;
    setTreino(novo);
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold text-red-500 mb-4">TREINOS RAY</h1>

      <button
        onClick={() => setModoEdicao(!modoEdicao)}
        className="mb-4 px-4 py-2 bg-red-600 rounded-full text-white"
      >
        {modoEdicao ? "Sair do modo edicao" : "Editar treino"}
      </button>

      {treino.map((grupo, grupoIdx) => (
        <div key={grupo.grupo} className="mb-6">
          <h2 className="text-xl font-semibold border-b border-red-500 mb-2">{grupo.grupo}</h2>
          {grupo.exercicios.map((ex, exIdx) => (
            <div key={ex.nome} className="mb-4 bg-white/10 p-2 rounded-xl">
              {modoEdicao ? (
                <>
                  <input
                    type="text"
                    value={ex.nome}
                    onChange={e =>
                      atualizarExercicio(grupoIdx, exIdx, "nome", e.target.value)
                    }
                    className="w-full mb-2 p-1 bg-white text-black rounded"
                  />
                  <input
                    type="text"
                    value={ex.imagem}
                    onChange={e =>
                      atualizarExercicio(grupoIdx, exIdx, "imagem", e.target.value)
                    }
                    className="w-full p-1 bg-white text-black rounded"
                    placeholder="URL da imagem"
                  />
                </>
              ) : (
                <>
                  <p className="text-base font-medium">{ex.nome}</p>
                  <img
                    src={ex.imagem}
                    alt={ex.nome}
                    className="w-full mt-1 rounded-lg"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

