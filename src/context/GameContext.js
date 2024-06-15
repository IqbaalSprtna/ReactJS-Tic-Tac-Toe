import React, { createContext, useContext, useState } from "react";

// Membuat Context
const GameContext = createContext();

// Membuat Provider untuk Context
function GameProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function selectSquare(square) {
    if (squares[square] || calculateWinner(squares)) {
      return;
    }
    const nextValue = calculateNextValue(squares);
    const newSquares = squares.slice();
    newSquares[square] = nextValue;
    setSquares(newSquares);
  }

  function restart() {
    setSquares(Array(9).fill(null));
  }

  return (
    <GameContext.Provider value={{ squares, selectSquare, restart }}>
      {children}
    </GameContext.Provider>
  );
}

// Custom hook untuk menggunakan GameContext
function useGame() {
  return useContext(GameContext);
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`;
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export {
  GameProvider,
  useGame,
  calculateStatus,
  calculateNextValue,
  calculateWinner,
};
