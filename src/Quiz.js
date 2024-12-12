import React, { useState } from 'react';
import './Quiz.css'; // Importando o arquivo CSS

const perguntas = [
  {
    pergunta: 'Qual é a capital do Brasil?',
    opcoes: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
    resposta: 'Brasília'
  },
  {
    pergunta: 'Quem descobriu o Brasil?',
    opcoes: ['Pedro Álvares Cabral', 'Cristóvão Colombo', 'Vasco da Gama', 'Fernão de Magalhães'],
    resposta: 'Pedro Álvares Cabral'
  },
  {
    pergunta: 'Quantos planetas existem no sistema solar?',
    opcoes: ['5', '7', '9', '8'],
    resposta: '8'
  }
];

function Quiz() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);

  // Função para registrar a resposta selecionada
  const responder = (respostaSelecionada) => {
    setRespostas([...respostas, respostaSelecionada]);
    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      calcularResultado();
    }
  };

  // Função para calcular o resultado final
  const calcularResultado = () => {
    let pontuacao = 0;
    for (let i = 0; i < perguntas.length; i++) {
      if (respostas[i] === perguntas[i].resposta) {
        pontuacao++;
      }
    }
    setResultado(pontuacao);
  };

  // Função para reiniciar o quiz
  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostas([]);
    setResultado(null);
  };

  return (
    <div className="quiz-container">
      {resultado !== null ? (
        <div className="resultado">
          <h2>Resultado do Quiz</h2>
          <p>Você acertou {resultado} de {perguntas.length} perguntas!</p>
          <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div className="pergunta">
          <h2>Pergunta {indicePergunta + 1}</h2>
          <p>{perguntas[indicePergunta].pergunta}</p>
          <ul className="opcoes">
            {perguntas[indicePergunta].opcoes.map((opcao, index) => (
              <li
                key={index}
                className="opcao"
                onClick={() => responder(opcao)}
              >
                {opcao}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
