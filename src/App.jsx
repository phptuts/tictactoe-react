import { useContext } from "react";
import Square from "./Square";
import { GameContext } from "./game.context";

function App() {
  const { game, dispatch } = useContext(GameContext);
  function onNewGame() {
    dispatch({ type: "NEW_GAME" });
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>{game.subtitle}</h2>
      <div className="board">
        <div className="row">
          <Square id={0} />
          <Square id={1} />
          <Square id={2} />
        </div>
        <div className="row">
          <Square id={3} />
          <Square id={4} />
          <Square id={5} />
        </div>
        <div className="row">
          <Square id={6} />
          <Square id={7} />
          <Square id={8} />
        </div>
      </div>
      <div className="button">
        <button onClick={onNewGame} className="new-game">
          New Game
        </button>
      </div>
    </>
  );
}

export default App;
