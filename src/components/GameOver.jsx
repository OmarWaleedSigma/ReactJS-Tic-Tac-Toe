export default function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && (
        <p style={{ textTransform: "capitalize" }}>{winner} won the game 🥇🏆!</p>
      )}
      {!winner && <p style={{ textTransform: "capitalize" }}>it's a draw...😑</p>}
      <p>
        <button onClick={onReset}>Rematch 🔁!</button>
      </p>
    </div>
  );
}
