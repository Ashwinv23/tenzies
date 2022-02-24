import React, { useState } from "react";
import Dice from "./Dice";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const generateNewDie = () => {
    let randVal = Math.floor(Math.random() * 6 + 1);
    return {
      value: randVal,
      isHeld: false,
      id: nanoid(),
    };
  };

  const newDice = () => {
    let values = [];
    for (let i = 0; i < 10; i++) {
      values.push(generateNewDie());
    }
    return values;
  };

  const rollDice = () => {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
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
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
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
