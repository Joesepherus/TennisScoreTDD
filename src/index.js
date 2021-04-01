import { getScoreInText } from "./utils.js";

let score;
let gameOver;
let error;
let deuce;

export function startTennisMatch() {
  score = [0, 0];
  gameOver = false;
  error = false;
  deuce = false;
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

function getAdvantage(diff, isServerUp) {
  if (diff === 1) {
    if (isServerUp) {
      return "Advantage - Server";
    } else {
      return "Advantage - Opponent";
    }
  }
}

function getGameOver(diff, isServerUp) {
  if (diff > 1) {
    gameOver = true;
    if (isServerUp) {
      return "Game - Server";
    } else {
      return "Game - Opponent";
    }
  }
}

export function getScore() {
  if (error) return error;

  let scoreText;
  const serverScore = score[0];
  const opponentScore = score[1];
  const diff = Math.abs(serverScore - opponentScore);

  if (serverScore > 3 || opponentScore > 3) {
    const isServerUp = serverScore > opponentScore;
    scoreText = getGameOver(diff, isServerUp);
    scoreText = !gameOver ? getAdvantage(diff, isServerUp) : scoreText;
  }
  if (serverScore >= 3 && opponentScore >= 3 && diff === 0) {
    scoreText = "Deuce";
  }

  return scoreText
    ? scoreText
    : `${getScoreInText(serverScore)} - ${getScoreInText(opponentScore)}`;
}
