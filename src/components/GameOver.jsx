export default function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && (
        <>
        <p style={{ textTransform: "capitalize" }}>a new champion has arrived: "{winner}" !</p>
        <p style={{ textTransform: "capitalize" }}>Congrats🥇🏆!</p>
        </>
      )}
      {!winner && (
        <>
          <p style={{ textTransform: "capitalize" }}>
            no one won this time...😔
          </p>
        </>
      )}
      <p>
        <button onClick={onReset}>Rematch 🔁!</button>
      </p>
    </div>
  );
}
