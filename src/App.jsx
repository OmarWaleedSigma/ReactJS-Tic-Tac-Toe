import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from "./libs/helper_functions";
import { INITIAL_PLAYERS } from "./libs/helper_constants";

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard,players)
  const hasDraw = gameTurns.length === 9 && !winner;
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];
      return updatedTurns;
    });
  };
  const handleResetGame = () => {
    setGameTurns([]);
  };

  const handlePlayersChange = (symbol, name) => { // symbol = 'X'
    setPlayers((prevPlayers) => ({ ...prevPlayers, [symbol]: name }));
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            handlePlayersChange={handlePlayersChange}
          />
          <Player
            name={players.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            handlePlayersChange={handlePlayersChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onReset={handleResetGame} />
        )}
        <GameBoard
          handleSelectSquare={handleSelectSquare}
          gameBoard={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
export default App;