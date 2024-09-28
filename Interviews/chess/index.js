const chess = new Array(8).fill(0).map((d) => new Array(8).fill(1));
console.log(chess);
const chessBorder = document.getElementById("chess-board-outline");

chess.forEach((row, index) => {
  const chessRow = document.createElement("div");
  chessRow.setAttribute("class", "row");
  chessRow.setAttribute("id", `row-${index}`);
  chessBorder.appendChild(chessRow);

  row.forEach((col, colIndex) => {
    const chessCol = document.createElement("div");
    chessCol.setAttribute("class", "col");
    chessCol.setAttribute("id", `col-${colIndex}`);
    if((index % 2 === 0 && colIndex % 2 !== 0) || (index % 2 !== 0 && colIndex % 2 === 0)) {
      chessCol.style.backgroundColor = 'brown'
    }
    chessRow.appendChild(chessCol);
  });
});
