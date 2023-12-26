import React, { useContext } from "react";
import { GameContext } from "./game.context";

const Square = ({ id }) => {
  const { game, dispatch } = useContext(GameContext);
  function onMove() {
    dispatch({ type: "MOVE", payload: id });
  }

  return (
    <div onClick={onMove} className="square">
      {game.board[id] ?? ""}
    </div>
  );
};

export default Square;
