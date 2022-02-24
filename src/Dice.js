import React from "react";

function Dice({ value, isHeld, holdDice, id }) {
  return (
    <div className={isHeld ? "dice dice-green" : "dice"} onClick={holdDice}>
      <h3>{value}</h3>
    </div>
  );
}

export default Dice;
