import { createContext, useReducer } from "react";
import gameReducer from "./game.reducer";

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [game, dispatch] = useReducer(gameReducer, {
    board: [null, null, null, null, null, null, null, null, null],
    isOver: false,
    winner: "",
    turn: "X",
    subtitle: "X's turn!",
  });

  return (
    <GameContext.Provider value={{ game, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
