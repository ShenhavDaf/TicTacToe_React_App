function Log({ turnsList }) {
  // for (const turn of turnsList) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   gameBoard[row][col] = player;
  // }

  return (
    <ol id="log">
      {turnsList.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected ({turn.square.row},{turn.square.col})
        </li>
      ))}
    </ol>
  );
}

export default Log;
