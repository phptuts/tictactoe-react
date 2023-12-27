import React, { useContext } from "react";
import { GameContext } from "./game.context";

const Square = ({ id }) => {
  const { game, sendMove } = useContext(GameContext);
  function onMove() {
    sendMove(id);
  }

  return (
    <div onClick={onMove} className="square">
      {game.board[id] ?? ""}
    </div>
  );
};

export default Square;
