import React from "react";

function Dice({ value, isHeld }) {
  return (
    <div className={isHeld ? "dice dice-green" : "dice"}>
      <h3>{value}</h3>
    </div>
  );
}

export default Dice;
