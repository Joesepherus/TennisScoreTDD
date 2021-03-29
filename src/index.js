import { getScoreInText } from "./utils.js";

let score;
let gameOver;
let error;

export function startTennisMatch() {
  score = [0, 0];
  gameOver = false;
  error = false;
}

export function serverScores() {
  if (gameOver) {
    error = "Game is already over. You can't score anymore.";
    return;
  }
  score[0]++;
  getScore();
}

export function opponentScores() {
  if (gameOver) {
    error = "Game is already over. You can't score anymore.";
    return;
  }
  score[1]++;
  getScore();
}

export function getScore() {
  if (error) return error;

  const serverScore = getScoreInText(score[0]);
  const opponentScore = getScoreInText(score[1]);

  if (serverScore === "Game") {
    gameOver = true;
    return "Game - Server";
  }
  if (opponentScore === "Game") {
    gameOver = true;
    return "Game - Opponent";
  }

  return `${serverScore} - ${opponentScore}`;
}
