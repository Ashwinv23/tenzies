import React from "react";
import Dice from "./Dice";
import "./App.css";

function App() {
  let values = [];
  for (let i = 0; i < 10; i++) {
    let randVal = Math.floor(Math.random() * 6 + 1);
    values.push(randVal);
  }
  console.log(values);

  return (
    <main className="outer">
      <div className="inner">
        <div className="dice-container">
          {values.map((val, index) => (
            <Dice key={index} value={val} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
