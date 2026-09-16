import { WINNING_COMBINATIONS } from "../winning-combinations";
import { INITIAL_GAME_BOARD } from "./helper_constants";

export function deriveActivePlayer(turns) {
  let activePlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

export function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

export function deriveWinner(gameBoard,players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstCombination =
      gameBoard[combination[0].row][combination[0].column];
    const secondCombination =
      gameBoard[combination[1].row][combination[1].column];
    const thirdCombination =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstCombination &&
      firstCombination === secondCombination &&
      firstCombination === thirdCombination
    ) {
      winner = players[firstCombination];
      break;
    }
  }
  return winner;
}
