import { createContext, useEffect, useReducer, useRef, useState } from "react";
import gameReducer from "./game.reducer";

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    isOver: false,
    winner: "",
    turn: "X",
    subtitle: "X's turn!",
  });

  const ws = useRef(null);
  useEffect(() => {
    if (ws.current == null || ws.current?.readyState != WebSocket.OPEN) {
      ws.current = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL);
    }
    ws.current.onopen = function (event) {
      console.log(event, "onconnection");
    };
    ws.current.onmessage = function (event) {
      console.log("message recieved");
      setGame(JSON.parse(event.data));
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  function sendMove(index) {
    if (ws.current) {
      ws.current.send(JSON.stringify({ type: "MOVE", payload: index }));
    }
  }

  function newGame() {
    if (ws.current) {
      ws.current.send(JSON.stringify({ type: "NEW_GAME" }));
    }
  }

  return (
    <GameContext.Provider value={{ game, sendMove, newGame }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
