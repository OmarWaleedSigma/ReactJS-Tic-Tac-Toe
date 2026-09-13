import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({handleActivePlayer, currentSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, colIndex) => {
      setGameBoard((prevGameBoard) => {
        const newBoard = [...prevGameBoard.map((row) => [...row])]; // Create a deep copy of the game board
        newBoard[rowIndex][colIndex] = currentSymbol;
        return newBoard;
      });
      handleActivePlayer();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
