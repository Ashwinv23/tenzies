import React, { useState } from "react";
import Dice from "./Dice";
import "./App.css";

function App() {
  const newDice = () => {
    let values = [];
    for (let i = 0; i < 10; i++) {
      let randVal = Math.floor(Math.random() * 6 + 1);
      values.push({
        value: randVal,
        isHeld: false,
      });
    }
    return values;
  };

  const rollDice = () => {
    setDice(newDice());
  };

  const [dice, setDice] = useState(newDice());

  return (
    <main className="outer">
      <div className="inner">
        <div className="dice-container">
          {dice.map((val, index) => (
            <Dice key={index} {...val} />
          ))}
        </div>
      </div>
      <button className="roll" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
