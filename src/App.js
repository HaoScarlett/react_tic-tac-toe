import React, { useState } from "react";

export function Square({ value, onSquareClick }) {
  // declare the value before the handleClick fn
  // const [value, setValue] = useState(null);
  // function handleClick() {
  // add onClick event to the btn
  // onClick event should be set to the handleClick
  // ❌setValue = "X";
  //   setValue("X");
  // }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // keep track of X
  const [xIsNext, setXIsNext] = useState(true);

  // create a state variable 'squares' and an update function
  // the initial value of squares: an arr of 9 null
  // 🔸 squares is an arr that will hold the values of 9 squares
  // initially, all squares are empty(null)
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // check if the square if empty
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // create a copy of squares
    // 🔸 not changing the underlying data directly -- Immutability
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Caltucate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
