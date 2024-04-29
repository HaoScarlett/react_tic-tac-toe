import React, { useState } from "react";

export function Square({ value, onSquareClick }) {
  // declare the value before the handleClick fn
  const [value, setValue] = useState(null);
  function handleClick() {
    // add onClick event to the btn
    // onClick event should be set to the handleClick
    // ❌setValue = "X";
    setValue("X");
  }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // create a state variable 'squares' and an update function
  // the initial value of squares: an arr of 9 null
  // 🔸 squares is an arr that will hold the values of 9 squares
  // initially, all squares are empty(null)
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square onSquareClick={handleClick} />
        <Square onSquareClick={handleClick} />
        <Square onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square onSquareClick={handleClick} />
        <Square onSquareClick={handleClick} />
        <Square onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square onSquareClick={handleClick} />
        <Square onSquareClick={handleClick} />
        <Square onSquareClick={handleClick} />
      </div>
    </>
  );
}
