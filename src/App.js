import React, { useState } from "react";
import Dice from "./Dice";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const newDice = () => {
    let values = [];
    for (let i = 0; i < 10; i++) {
      let randVal = Math.floor(Math.random() * 6 + 1);
      values.push({
        value: randVal,
        isHeld: false,
        id: nanoid(),
      });
    }
    return values;
  };

  const rollDice = () => {
    setDice(newDice());
  };

  const [dice, setDice] = useState(newDice());

  const holdDice = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  return (
    <main className="outer">
      <div className="inner">
        <div className="dice-container">
          {dice.map((val) => (
            <Dice
              key={val.id}
              value={val.value}
              isHeld={val.isHeld}
              holdDice={() => holdDice(val.id)}
            />
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
