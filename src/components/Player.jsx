import { useState } from "react";

export default function Player({
  name,
  symbol,
  isActive,
  handlePlayersChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const handleChangePlayerName = (event) => {
    setPlayerName(event.target.value);
  };
  const handleEdit = () => {
    setIsEditing((oldIsEditing) => !oldIsEditing); //false => true
    // setIsEditing(oldIsEditing=>!oldIsEditing); //false => true
    if (isEditing) handlePlayersChange(symbol, playerName);
  };
  let playerContainer = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerContainer = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChangePlayerName}
      />
    );
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerContainer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
