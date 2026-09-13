import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const handleActivePlayer=()=>{
    setCurrentPlayer((prevCurrentPlayer) => (prevCurrentPlayer === "X" ? "O" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
      <GameBoard handleActivePlayer={handleActivePlayer} currentSymbol={currentPlayer} />
      </div>
    </main>
  );
}
export default App;
