import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      // all the infos come through the props
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span id="player">
        {/* when isEditing is false only span, when it's true input field. */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      {/* when click event executed then isEditing is true */}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
