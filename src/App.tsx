import { useState } from "react";
import "./App.css";

function App() {
  const [playerTurn, setPlayerTurn] = useState("x");
  return (
    <>
      <div className="text-3xl font-bold">
        <p>Harris:</p>
        <p>Tic Tac Toe project</p>
        <p>The current player turn is {playerTurn}</p>
      </div>
      <div>
        <button className="border">X</button>
        <button>O</button>
        <button>X</button>
      </div>
    </>
  );
}

export default App;
