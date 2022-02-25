import React, { useEffect, useState } from "react";
import Dice from "./Dice";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [tenzies, setTenzies] = useState(false);

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
    if (tenzies) {
      setDice(newDice());
      setTenzies(false);
    } else {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    }
  };

  const allEqual = (arr) => arr.every((val) => val === arr[0]);

  const [dice, setDice] = useState(newDice());

  useEffect(() => {
    let allHeld = dice.every((die) => die.isHeld);
    const values = dice.map((die) => die.value);
    const allSame = allEqual(values);
    if (allHeld && allSame) {
      setTenzies(true);
      console.log("Yayyy!! You WON!!!");
    }
  }, [dice]);

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
        {tenzies ? <div style={{ fontSize: "1rem" }}>New Game</div> : "Roll"}
      </button>
    </main>
  );
}

export default App;
